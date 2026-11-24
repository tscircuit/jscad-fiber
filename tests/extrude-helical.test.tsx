import { expect, test } from "bun:test"
import modeling from "@jscad/modeling"
import { ExtrudeHelical } from "../lib/jscad-fns/extrude-helical"
import { Circle } from "../lib/jscad-fns/circle"
import { testRender } from "./fixtures/test-render"

const polygonCount = (geometry: any) => geometry.polygons.length

test("extrudeHelical forwards segmetsPerRotation to JSCAD", () => {
  const profile = modeling.primitives.circle({ radius: 2 })
  const options = { height: 10, angle: Math.PI * 2 }

  const rendered8 = testRender(
    <ExtrudeHelical {...options} segmetsPerRotation={8}>
      <Circle radius={2} />
    </ExtrudeHelical>,
  )[0]
  const expected8 = modeling.extrusions.extrudeHelical(
    { ...options, segmentsPerRotation: 8 },
    profile,
  )
  expect(polygonCount(rendered8)).toBe(polygonCount(expected8))

  const rendered64 = testRender(
    <ExtrudeHelical {...options} segmetsPerRotation={64}>
      <Circle radius={2} />
    </ExtrudeHelical>,
  )[0]
  expect(polygonCount(rendered64)).not.toBe(polygonCount(rendered8))
})
