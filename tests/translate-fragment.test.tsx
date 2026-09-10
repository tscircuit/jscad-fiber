import { test, expect } from "bun:test"
import * as jscad from "@jscad/modeling"
import { testRender } from "./fixtures/test-render"
import { Translate, Cuboid } from "../lib/jscad-fns"

const TwoCuboids = () => (
  <>
    <Cuboid size={[1, 1, 1]} />
    <Cuboid size={[2, 2, 2]} />
  </>
)

test("Translate applies offset to each child in a fragment", () => {
  const container = testRender(
    (
      <Translate offset={[10, 0, 0]}>
        <>
          <Cuboid size={[1, 1, 1]} />
          <Cuboid size={[2, 2, 2]} />
        </>
      </Translate>
    ) as any,
  )

  expect(container).toHaveLength(2)
  for (const geom of container) {
    const bounds = jscad.measurements.measureBoundingBox(geom)
    expect(bounds[0][0]).toBeGreaterThanOrEqual(9)
    expect(bounds[1][0]).toBeGreaterThan(10)
  }
})

test("Translate applies offset to a higher-level component that returns a fragment", () => {
  const container = testRender(
    <Translate offset={[0, 5, 0]}>
      <TwoCuboids />
    </Translate>,
  )

  expect(container).toHaveLength(2)
  for (const geom of container) {
    const bounds = jscad.measurements.measureBoundingBox(geom)
    expect(bounds[0][1]).toBeGreaterThanOrEqual(4)
    expect(bounds[1][1]).toBeGreaterThan(5)
  }
})

test("Translate still works with a single primitive child", () => {
  const container = testRender(
    <Translate offset={[5, 0, 0]}>
      <Cuboid size={[1, 1, 1]} />
    </Translate>,
  )

  expect(container).toHaveLength(1)
  const bounds = jscad.measurements.measureBoundingBox(container[0])
  expect(bounds[0][0]).toBe(4.5)
  expect(bounds[1][0]).toBe(5.5)
})
