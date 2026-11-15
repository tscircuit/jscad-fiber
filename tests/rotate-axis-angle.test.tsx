import { expect, test } from "bun:test"
import modeling from "@jscad/modeling"
import { jscadPlanner } from "jscad-planner"
import { createJSCADRenderer } from "../lib"
import { jscad, renderToJscadPlan } from "../lib/headless"
import { Cuboid, Rotate, Sphere } from "../lib/jscad-fns"
import { renderToJscadModel } from "../lib/model"

test("Rotate supports axis and degree angle shorthand", () => {
  const container: any[] = []
  const renderer = createJSCADRenderer(jscadPlanner as any)
  const root = renderer.createJSCADRoot(container)

  root.render(
    <Rotate axis="z" angle={90}>
      <Sphere radius={2} />
    </Rotate>,
  )

  expect(container).toHaveLength(1)
  expect(container[0].type).toBe("rotate")
  expect(container[0].angles[0]).toBe(0)
  expect(container[0].angles[1]).toBe(0)
  expect(container[0].angles[2]).toBeCloseTo(Math.PI / 2)
})

test("Rotate supports x/y/-x/-y/-z axes, string units, and radian values", () => {
  const xPlan = renderToJscadPlan(
    <Rotate axis="x" angle={-45}>
      <Cuboid size={[2, 4, 6]} />
    </Rotate>,
  ) as any
  expect(xPlan.type).toBe("rotate")
  expect(xPlan.angles[0]).toBeCloseTo(-Math.PI / 4)
  expect(xPlan.angles[1]).toBe(0)
  expect(xPlan.angles[2]).toBe(0)

  const yPlan = renderToJscadPlan(
    <jscad.rotate axis="y" angle="5deg">
      <jscad.cuboid size={[2, 4, 6]} />
    </jscad.rotate>,
  ) as any
  expect(yPlan.type).toBe("rotate")
  expect(yPlan.angles[0]).toBe(0)
  expect(yPlan.angles[1]).toBeCloseTo((5 * Math.PI) / 180)
  expect(yPlan.angles[2]).toBe(0)

  const negZPlan = renderToJscadPlan(
    <Rotate axis="-z" angle={Math.PI / 2}>
      <Cuboid size={[2, 4, 6]} />
    </Rotate>,
  ) as any
  expect(negZPlan.angles[0]).toBe(0)
  expect(negZPlan.angles[1]).toBe(0)
  expect(negZPlan.angles[2]).toBeCloseTo(-Math.PI / 2)

  const radStringPlan = renderToJscadPlan(
    <Rotate axis="x" angle="7rad">
      <Cuboid size={[2, 4, 6]} />
    </Rotate>,
  ) as any
  expect(radStringPlan.angles[0]).toBeCloseTo(7)
})

test("Rotate axis/angle rotates native geometry bounding box accurately", () => {
  const model = renderToJscadModel(
    <Rotate axis="z" angle={90}>
      <Cuboid size={[10, 2, 4]} />
    </Rotate>,
    modeling,
  )

  expect(model.geometries).toHaveLength(1)
  const bounds = modeling.measurements.measureBoundingBox(model.geometries[0])
  expect(bounds[0][0]).toBeCloseTo(-1, 6)
  expect(bounds[1][0]).toBeCloseTo(1, 6)
  expect(bounds[0][1]).toBeCloseTo(-5, 6)
  expect(bounds[1][1]).toBeCloseTo(5, 6)
  expect(bounds[0][2]).toBeCloseTo(-2, 6)
  expect(bounds[1][2]).toBeCloseTo(2, 6)
})
