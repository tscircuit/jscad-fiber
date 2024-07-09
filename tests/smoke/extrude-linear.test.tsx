import { it } from "bun:test"
import { testRender } from "../fixtures/test-render"

it("should not error when rendering an extrudeLinear", () => {
  testRender(
    <extrudeLinear height={4}>
      <jscadPolygon
        points={[
          [-2, -1],
          [2, -1],
          [2.5, 2],
          [1, 1],
          [0, 2],
          [-1, 1],
          [-2, 2],
        ]}
      />
    </extrudeLinear>
  )
})
