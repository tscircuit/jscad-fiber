import { expect, test } from "bun:test"
import modeling from "@jscad/modeling"
import { executeJscadOperations } from "jscad-planner"
import {
  Custom,
  ExtrudeLinear,
  Polygon,
  Rectangle,
  Rotate,
  Subtract,
  Translate,
  renderToJscadModel,
  type JscadReferenceFeature,
} from "../lib/model"
import { renderToJscadPlan } from "../lib/headless"

test("named extrusion ends come from actual profiles and match the solid caps under signed height, twist and placement", () => {
  const points: [number, number][] = [
    [1, 2],
    [5, 2],
    [2, 7],
  ]
  const samples = (feature: JscadReferenceFeature) => {
    const paths = modeling.geometries.geom2.isA(feature.geometry)
      ? modeling.geometries.geom2.toOutlines(
          modeling.geometries.geom2.clone(
            feature.geometry as modeling.geometries.geom2.Geom2,
          ),
        )
      : [
          modeling.geometries.path2.toPoints(
            modeling.geometries.path2.clone(
              feature.geometry as modeling.geometries.path2.Path2,
            ),
          ),
        ]
    return paths
      .flat()
      .map(([x, y]) =>
        modeling.maths.vec3.transform(
          [0, 0, 0],
          [x, y, 0],
          feature.matrix as modeling.maths.mat4.Mat4,
        ),
      )
  }
  for (const height of [12, -12])
    for (const twistAngle of [0, Math.PI / 3]) {
      const model = renderToJscadModel(
        <Translate offset={[10, 20, 30]}>
          <Rotate angles={[Math.PI / 4, Math.PI / 6, Math.PI / 8]}>
            <ExtrudeLinear
              height={height}
              twistAngle={twistAngle}
              twistSteps={3}
              center={[2, -3, 4]}
              topOutlineName="top"
              bottomOutlineName="bottom"
            >
              <Translate offset={[7, -4, 0]}>
                <Polygon points={points} />
              </Translate>
            </ExtrudeLinear>
          </Rotate>
        </Translate>,
        modeling,
      )
      expect(Object.keys(model.referenceFeatures)).toEqual(["top", "bottom"])
      expect(model.geometries).toHaveLength(1)
      const polygons = modeling.geometries.geom3.toPolygons(
        model.geometries[0] as modeling.geometries.geom3.Geom3,
      )
      const startMatrix = model.referenceFeatures.bottom.matrix
      const axis = [startMatrix[8], startMatrix[9], startMatrix[10]]
      const dot = (point: number[]) =>
        point.reduce((sum, value, i) => sum + value * axis[i], 0)
      for (const [name, z] of [
        ["top", height],
        ["bottom", 0],
      ] as const) {
        const planePoint = modeling.maths.vec3.transform(
          [0, 0, 0],
          [0, 0, z],
          startMatrix as modeling.maths.mat4.Mat4,
        )
        const plane = dot(planePoint)
        const capVertices = polygons
          .filter((polygon) =>
            polygon.vertices.every(
              (vertex) => Math.abs(dot(vertex) - plane) < 1e-7,
            ),
          )
          .flatMap((polygon) => polygon.vertices)
        expect(capVertices.length).toBeGreaterThanOrEqual(3)
        for (const point of samples(model.referenceFeatures[name]))
          expect(
            capVertices.some(
              (vertex) =>
                Math.hypot(...point.map((v, i) => v - vertex[i])) < 1e-7,
            ),
          ).toBe(true)
      }
    }
  const scaled = modeling.transforms.scale(
    [2, 3, 1],
    modeling.geometries.path2.fromPoints({ closed: true }, points),
  )
  const scaledModel = renderToJscadModel(
    <ExtrudeLinear
      height={5}
      topOutlineName="scaled_top"
      bottomOutlineName="scaled_bottom"
    >
      <Custom geometry={scaled} />
    </ExtrudeLinear>,
    modeling,
  )
  expect(
    modeling.geometries.path2.isA(
      scaledModel.referenceFeatures.scaled_top.geometry,
    ),
  ).toBe(true)
  const scaledVertices = modeling.geometries.geom3
    .toPolygons(scaledModel.geometries[0] as modeling.geometries.geom3.Geom3)
    .flatMap((polygon) => polygon.vertices)
  for (const point of samples(scaledModel.referenceFeatures.scaled_top))
    expect(
      scaledVertices.some(
        (vertex) => Math.hypot(...point.map((v, i) => v - vertex[i])) < 1e-7,
      ),
    ).toBe(true)
  const hollow = renderToJscadModel(
    <ExtrudeLinear height={8} topOutlineName="hollow">
      <Subtract>
        <Rectangle size={[40, 20]} />
        <Rectangle size={[34, 14]} />
      </Subtract>
    </ExtrudeLinear>,
    modeling,
  )
  expect(
    modeling.geometries.geom2.toOutlines(
      hollow.referenceFeatures.hollow
        .geometry as modeling.geometries.geom2.Geom2,
    ),
  ).toHaveLength(2)
  expect(modeling.measurements.measureVolume(hollow.geometries[0])).toBeCloseTo(
    modeling.measurements.measureArea(
      hollow.referenceFeatures.hollow.geometry,
    ) * 8,
  )
  const plan = JSON.parse(
    JSON.stringify(
      renderToJscadPlan(
        <ExtrudeLinear
          height={7}
          twistAngle={Math.PI / 4}
          twistSteps={4}
          topOutlineName="plan_top"
          bottomOutlineName="plan_bottom"
        >
          <Polygon points={points} />
        </ExtrudeLinear>,
      ),
    ),
  )
  expect(plan.type).toBe("extrudeLinear")
  expect(plan.topOutlineName).toBe("plan_top")
  expect(plan.bottomOutlineName).toBe("plan_bottom")
  expect(plan.options.twistAngle).toBe(Math.PI / 4)
  const executed = executeJscadOperations(modeling as any, plan)
  const expected = modeling.extrusions.extrudeLinear(
    { height: 7, twistAngle: Math.PI / 4, twistSteps: 4 },
    modeling.primitives.polygon({ points }),
  )
  expect(modeling.geometries.geom3.toPolygons(executed)).toEqual(
    modeling.geometries.geom3.toPolygons(expected),
  )
  for (const patch of [
    { topOutlineName: "" },
    { topOutlineName: " " },
    { bottomOutlineName: "" },
    { height: Infinity },
    { twistAngle: NaN },
    { twistSteps: 0 },
    { twistSteps: 1.5 },
    { twistSteps: Infinity },
  ])
    expect(() =>
      renderToJscadModel(
        <ExtrudeLinear height={4} topOutlineName="top" {...patch}>
          <Rectangle size={[2, 3]} />
        </ExtrudeLinear>,
        modeling,
      ),
    ).toThrow()
  expect(() =>
    renderToJscadModel(
      <ExtrudeLinear height={4} topOutlineName="same" bottomOutlineName="same">
        <Rectangle size={[2, 3]} />
      </ExtrudeLinear>,
      modeling,
    ),
  ).toThrow("Duplicate")
  expect(() =>
    renderToJscadModel(
      <ExtrudeLinear height={4} topOutlineName="ambiguous">
        <Rectangle size={[2, 3]} />
        <Rectangle size={[1, 1]} />
      </ExtrudeLinear>,
      modeling,
    ),
  ).toThrow("one profile")
  const empty = renderToJscadModel(
    <ExtrudeLinear height={4} topOutlineName="phantom">
      <Custom name="datum" geometry={scaled} reference />
    </ExtrudeLinear>,
    modeling,
  )
  expect(empty.geometries).toEqual([])
  expect(Object.keys(empty.referenceFeatures)).toEqual(["datum"])
})
