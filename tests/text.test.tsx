import { measurements } from "@jscad/modeling"
import { test, expect } from "bun:test"
import { jscadPlanner } from "jscad-planner"
import { createJSCADRenderer } from "../lib"
import { Text } from "lib/jscad-fns"
import { testRender } from "./fixtures/test-render"

test("Text renders a single-stroke glyph to the jscad planner", () => {
  const container = []
  const renderer = createJSCADRenderer(jscadPlanner as any)
  const root = renderer.createJSCADRoot(container)
  root.render(<Text text="I" fontSize={4} height={1} />)

  expect(container).toMatchSnapshot()
})

test("Text children strings match the text prop", () => {
  const fromProp = testRender(<Text text="I" fontSize={4} height={1} />)
  const fromChildren = testRender(
    <Text fontSize={4} height={1}>
      I
    </Text>,
  )

  expect(fromProp).toHaveLength(1)
  expect(fromChildren).toHaveLength(1)
  expect(measurements.measureBoundingBox(fromProp[0])).toEqual(
    measurements.measureBoundingBox(fromChildren[0]),
  )
})

test("Text produces finite 3D geometry for multi-stroke words", () => {
  const container = testRender(
    <Text text="Hi" fontSize={4} height={1} color="orange" />,
  )

  expect(container.length).toBeGreaterThan(0)
  const bbox = measurements.measureBoundingBox(container[0])
  expect(bbox[0].every(Number.isFinite)).toBe(true)
  expect(bbox[1].every(Number.isFinite)).toBe(true)
  expect(bbox[1][0]).toBeGreaterThan(bbox[0][0])
  expect(bbox[1][1]).toBeGreaterThan(bbox[0][1])
  expect(bbox[1][2] - bbox[0][2]).toBeCloseTo(1, 5)
})

test("Text rejects empty input", () => {
  expect(() => testRender(<Text text="" />)).toThrow("non-empty string")
  expect(() => testRender(<Text text="   " />)).toThrow("no strokes")
})
