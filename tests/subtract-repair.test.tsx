import { expect, test } from "bun:test"
import modeling from "@jscad/modeling"
import {
  Cuboid,
  ExtrudeLinear,
  Polygon,
  Subtract,
  renderToJscadModel,
} from "../lib/model"
import { renderToJscadPlan } from "../lib/headless"

test("subtraction repair preserves native outlines", () => {
  const profilePoints = (width: number, height: number, radius: number) =>
    modeling.geometries.geom2.toOutlines(
      modeling.primitives.roundedRectangle({
        size: [width, height],
        roundRadius: radius,
        segments: 64,
      }),
    )[0] as [number, number][]
  const outerPoints = profilePoints(40, 20, 4)
  const innerPoints = profilePoints(36, 16, 2)
  const tube = (repair = false) => (
    <Subtract repair={repair}>
      <ExtrudeLinear height={60} topOutlineName="outer_top">
        <Polygon points={outerPoints} />
      </ExtrudeLinear>
      <ExtrudeLinear height={60} topOutlineName="inner_top">
        <Polygon points={innerPoints} />
      </ExtrudeLinear>
    </Subtract>
  )
  const native = modeling.booleans.subtract(
    modeling.extrusions.extrudeLinear(
      { height: 60 },
      modeling.primitives.polygon({ points: outerPoints }),
    ),
    modeling.extrusions.extrudeLinear(
      { height: 60 },
      modeling.primitives.polygon({ points: innerPoints }),
    ),
  )
  const unchanged = renderToJscadModel(tube(), modeling)
  expect(
    modeling.geometries.geom3.toPolygons(unchanged.geometries[0] as typeof native),
  ).toEqual(modeling.geometries.geom3.toPolygons(native))
  const repaired = renderToJscadModel(tube(true), modeling)
  const solid = repaired.geometries[0] as typeof native
  expect(() => modeling.geometries.geom3.validate(solid)).not.toThrow()
  modeling.measurements.measureDimensions(solid).forEach((value, axis) => {
    expect(value).toBeCloseTo([40, 20, 60][axis], 6)
  })
  const expectedVolume =
    (modeling.measurements.measureArea(
      modeling.primitives.polygon({ points: outerPoints }),
    ) -
      modeling.measurements.measureArea(
        modeling.primitives.polygon({ points: innerPoints }),
      )) *
    60
  expect(
    Math.abs(modeling.measurements.measureVolume(solid) - expectedVolume) /
      expectedVolume,
  ).toBeLessThan(0.001)
  expect(Object.keys(repaired.referenceFeatures)).toEqual([
    "outer_top",
    "inner_top",
  ])
  expect(repaired.referenceFeatures.outer_top.matrix[14]).toBe(60)
  expect(repaired.referenceFeatures.inner_top.matrix[14]).toBe(60)
  const plan = renderToJscadPlan(tube(true))
  expect((plan as unknown as { repair: boolean }).repair).toBe(true)
  const empty = renderToJscadModel(
    <Subtract repair>
      <Cuboid size={[2, 2, 2]} />
      <Cuboid size={[2, 2, 2]} />
    </Subtract>,
    modeling,
  )
  expect(
    modeling.geometries.geom3.toPolygons(
      empty.geometries[0] as typeof native,
    ),
  ).toHaveLength(0)
})
