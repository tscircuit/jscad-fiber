import { expect, test } from "bun:test"
import modeling from "@jscad/modeling"
import { executeJscadOperations } from "jscad-planner"
import { jscad, renderToJscadPlan, Text } from "../lib/headless"
import { renderToJscadModel } from "../lib/model"
import { createJSCADRenderer } from "../lib/renderer"

test("renders <Text> with children and text prop in headless plan compiler", () => {
  const planChildren = renderToJscadPlan(
    <Text fontSize={10} height={2}>
      Hi
    </Text>,
  )
  const solidChildren = executeJscadOperations(modeling as any, planChildren)
  const volumeChildren = modeling.measurements.measureVolume(solidChildren)
  expect(volumeChildren).toBeGreaterThan(0)

  const bounds = modeling.measurements.measureBoundingBox(solidChildren)
  expect(bounds[0][2]).toBeCloseTo(0, 5)
  expect(bounds[1][2]).toBeCloseTo(2, 5)
  expect(bounds[1][0] - bounds[0][0]).toBeGreaterThan(5)

  const planProp = renderToJscadPlan(
    <jscad.text text="Hi" fontSize={10} height={2} />,
  )
  const solidProp = executeJscadOperations(modeling as any, planProp)
  expect(modeling.measurements.measureVolume(solidProp)).toBeCloseTo(
    volumeChildren,
    5,
  )
})

test("renders <Text> via native renderToJscadModel and createJSCADRenderer", () => {
  const model = renderToJscadModel(
    <Text
      fontSize={8}
      height={1.5}
      color="red"
      center={[5, 10, 3]}
      rotation={[0, 0, "90deg"]}
    >
      PCB
    </Text>,
    modeling,
  )
  expect(model.geometries).toHaveLength(1)
  const vol = modeling.measurements.measureVolume(model.geometries[0])
  expect(vol).toBeGreaterThan(0)

  const bounds = modeling.measurements.measureBoundingBox(model.geometries[0])
  expect(bounds[0][2]).toBeCloseTo(3, 5)
  expect(bounds[1][2]).toBeCloseTo(4.5, 5)

  const container: any[] = []
  createJSCADRenderer(modeling as any)
    .createJSCADRoot(container)
    .render(<Text text="A" fontSize={6} height={1} />)
  expect(container).toHaveLength(1)
  expect(modeling.measurements.measureVolume(container[0])).toBeGreaterThan(0)
})

test("supports multiline text and horizontal alignment (left, center, right)", () => {
  const leftSolid = executeJscadOperations(
    modeling as any,
    renderToJscadPlan(
      <Text fontSize={8} height={1} align="left">
        {"AB\nC"}
      </Text>,
    ),
  )
  const centerSolid = executeJscadOperations(
    modeling as any,
    renderToJscadPlan(
      <Text fontSize={8} height={1} align="center">
        {"AB\nC"}
      </Text>,
    ),
  )
  const rightSolid = executeJscadOperations(
    modeling as any,
    renderToJscadPlan(
      <Text fontSize={8} height={1} align="right">
        {"AB\nC"}
      </Text>,
    ),
  )

  const leftBounds = modeling.measurements.measureBoundingBox(leftSolid)
  const centerBounds = modeling.measurements.measureBoundingBox(centerSolid)
  const rightBounds = modeling.measurements.measureBoundingBox(rightSolid)

  // Multi-line extends below y = 0
  expect(leftBounds[0][1]).toBeLessThan(0)

  // Left-aligned starts near x >= 0; center straddles x = 0; right ends near x <= 0
  expect(leftBounds[0][0]).toBeGreaterThanOrEqual(0)
  expect(centerBounds[0][0]).toBeLessThan(0)
  expect(centerBounds[1][0]).toBeGreaterThan(0)
  expect(rightBounds[1][0]).toBeLessThanOrEqual(0)
})

test("handles empty/whitespace text cleanly inside unions and rejects invalid dimensions", () => {
  const model = renderToJscadModel(
    <jscad.union>
      <jscad.cuboid size={[4, 4, 2]} />
      <Text text="   " />
    </jscad.union>,
    modeling,
  )
  expect(model.geometries).toHaveLength(1)
  expect(modeling.measurements.measureVolume(model.geometries[0])).toBeCloseTo(
    32,
    5,
  )

  expect(() => renderToJscadPlan(<Text text="A" fontSize={0} />)).toThrow(
    "positive finite",
  )
})
