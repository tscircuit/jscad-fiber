import { expect, test } from "bun:test"
import modeling from "@jscad/modeling"
import {
  Custom,
  ExtrudeLinear,
  Rotate,
  Rectangle,
  Subtract,
  Translate,
  renderToJscadModel,
} from "../lib/model"
import { createJSCADRenderer } from "../lib/renderer"

test("native JSX features share model geometry and retain full ancestor placement without entering CSG", () => {
  const outer = modeling.primitives.roundedRectangle({
    size: [40, 20],
    roundRadius: 3,
    segments: 64,
  })
  const inner = modeling.primitives.rectangle({ size: [34, 14] })
  const topSide = modeling.geometries.geom2
    .toSides(outer)
    .find(([a, b]) => a[1] === 10 && b[1] === 10)!
  const top = modeling.geometries.path2.fromPoints({ closed: false }, topSide)
  const original = JSON.stringify([outer, inner, top])
  function Tube() {
    return (
      <>
        <ExtrudeLinear height={80}>
          <Subtract>
            <Custom geometry={top} name="before_base" reference />
            <Custom geometry={outer} name="outer_profile" />
            <Custom geometry={inner} />
            <Translate x={100}>
              <Rotate angles={[Math.PI / 2, 0, 0]}>
                <Custom geometry={top} name="cutter_reference" reference />
              </Rotate>
            </Translate>
          </Subtract>
        </ExtrudeLinear>
        <Custom geometry={top} name="outer_top" reference />
        <Translate z={80}>
          <Rectangle name="end_plane" size={[40, 20]} reference />
        </Translate>
      </>
    )
  }
  const angles: [number, number, number] = [
    Math.PI / 2,
    Math.PI / 3,
    Math.PI / 4,
  ]
  const innerOffset: [number, number, number] = [-3, 7, 11]
  const outerOffset: [number, number, number] = [10, 20, 30]
  const element = (
    <Translate offset={outerOffset}>
      <Rotate angles={angles}>
        <Translate offset={innerOffset}>
          <Tube />
        </Translate>
      </Rotate>
    </Translate>
  )
  const model = renderToJscadModel(element, modeling)
  expect(model.geometries).toHaveLength(1)
  expect(Object.keys(model.referenceFeatures)).toEqual([
    "before_base",
    "outer_profile",
    "cutter_reference",
    "outer_top",
    "end_plane",
  ])
  expect(model.referenceFeatures.outer_profile.geometry).toBe(outer)
  expect(model.referenceFeatures.outer_top.geometry).toBe(top)
  expect(
    modeling.geometries.geom2.isA(model.referenceFeatures.end_plane.geometry),
  ).toBe(true)
  expect(model.referenceFeatures.end_plane.matrix).not.toEqual(
    model.referenceFeatures.outer_top.matrix,
  )
  expect(modeling.geometries.path2.toPoints(top)).toHaveLength(2)
  expect(
    Math.hypot(topSide[1][0] - topSide[0][0], topSide[1][1] - topSide[0][1]),
  ).toBeCloseTo(34)
  const baseline = modeling.extrusions.extrudeLinear(
    { height: 80 },
    modeling.booleans.subtract(outer, inner),
  )
  expect(modeling.measurements.measureVolume(model.geometries[0])).toBeCloseTo(
    modeling.measurements.measureVolume(baseline),
    6,
  )
  const kernelPlaced = modeling.transforms.translate(
    outerOffset,
    modeling.transforms.rotate(
      angles,
      modeling.transforms.translate(innerOffset, baseline),
    ),
  )
  expect(modeling.measurements.measureBoundingBox(model.geometries[0])).toEqual(
    modeling.measurements.measureBoundingBox(kernelPlaced),
  )
  const matrix = model.referenceFeatures.outer_top
    .matrix as modeling.maths.mat4.Mat4
  const point: [number, number, number] = [topSide[0][0], topSide[0][1], 0]
  const actual = modeling.maths.vec3.transform([0, 0, 0], point, matrix)
  const kernelMatrix = modeling.maths.mat4.multiply(
    modeling.maths.mat4.create(),
    modeling.maths.mat4.fromTranslation(
      modeling.maths.mat4.create(),
      outerOffset,
    ),
    modeling.maths.mat4.multiply(
      modeling.maths.mat4.create(),
      modeling.maths.mat4.fromTaitBryanRotation(
        modeling.maths.mat4.create(),
        angles[2],
        angles[1],
        angles[0],
      ),
      modeling.maths.mat4.fromTranslation(
        modeling.maths.mat4.create(),
        innerOffset,
      ),
    ),
  )
  expect(actual).toEqual(
    modeling.maths.vec3.transform([0, 0, 0], point, kernelMatrix),
  )
  expect(model.referenceFeatures.cutter_reference.matrix).not.toEqual(
    model.referenceFeatures.outer_top.matrix,
  )
  const normal: any[] = []
  createJSCADRenderer(modeling as any)
    .createJSCADRoot(normal)
    .render(element)
  expect(modeling.measurements.measureVolume(normal[0])).toBeCloseTo(
    modeling.measurements.measureVolume(baseline),
    6,
  )
  expect(JSON.stringify([outer, inner, top])).toBe(original)
  expect(
    renderToJscadModel(
      <Custom geometry={top} name="only" reference />,
      modeling,
    ).geometries,
  ).toEqual([])
  expect(renderToJscadModel(null, modeling).referenceFeatures).toEqual({})
  const second = renderToJscadModel(
    <Translate z={8}>
      <Custom geometry={top} name="outer_top" reference />
      <Translate z={80}>
        <Rectangle name="end_plane" size={[40, 20]} reference />
      </Translate>
    </Translate>,
    modeling,
  )
  expect(second.referenceFeatures.outer_top.matrix[14]).toBe(8)
  expect(model.referenceFeatures.outer_top.matrix).toEqual([...matrix])
})
