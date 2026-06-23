import { expect, test } from "bun:test"
import { Circle, Cube, Polygon, Rectangle, Union } from "lib/jscad-fns"
import { testRender } from "./fixtures/test-render"

test("color shorthand accepts bare hex strings", () => {
  const [geometry] = testRender(<Cube size={1} color="ff0000" />)

  expect(geometry.color).toEqual([1, 0, 0, 1])
})

test("color shorthand preserves rgba alpha values", () => {
  const [geometry] = testRender(<Cube size={1} color="rgba(255, 0, 0, 0.5)" />)

  expect(geometry.color).toEqual([1, 0, 0, 0.5])
})

test("2d shapes and union accept color shorthand", () => {
  const [circle, rectangle, polygon, union] = testRender(
    <>
      <Circle radius={1} color="red" />
      <Rectangle size={[1, 2]} color="#00ff00" />
      <Polygon
        points={[
          [0, 0],
          [1, 0],
          [0, 1],
        ]}
        color="0000ff"
      />
      <Union color="rgba(255, 0, 0, 0.25)">
        <Cube size={1} />
        <Cube size={1} />
      </Union>
    </>,
  )

  expect(circle.color).toEqual([1, 0, 0, 1])
  expect(rectangle.color).toEqual([0, 1, 0, 1])
  expect(polygon.color).toEqual([0, 0, 1, 1])
  expect(union.color).toEqual([1, 0, 0, 0.25])
})
