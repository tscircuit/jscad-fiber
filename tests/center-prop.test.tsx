import { expect, test } from "bun:test"
import { Circle, Cuboid, Rectangle, Sphere, Union } from "lib/jscad-fns"
import { createJSCADRenderer } from "../lib"

const fakeJscad = {
  primitives: {
    circle: (props: any) => ({ type: "circle", ...props }),
    rectangle: (props: any) => ({ type: "rectangle", ...props }),
    sphere: (props: any) => ({ type: "sphere", ...props }),
    cuboid: (props: any) => ({ type: "cuboid", ...props }),
  },
  transforms: {
    translate: (offset: [number, number, number], child: any) => ({
      type: "translate",
      offset,
      child,
    }),
  },
  booleans: {
    union: (left: any, right: any) => ({ type: "union", left, right }),
  },
} as any

test("center shorthand translates 2D and aggregate uppercase shapes", () => {
  const container = []
  const renderer = createJSCADRenderer(fakeJscad)
  const root = renderer.createJSCADRoot(container)

  root.render(
    <>
      <Circle radius={1} center={[1, 2, 3]} />
      <Rectangle size={[2, 3]} center={{ x: -1, y: -2, z: -3 }} />
      <Union center={[4, 5, 6]}>
        <Sphere radius={1} />
        <Cuboid size={[1, 1, 1]} />
      </Union>
    </>,
  )

  expect(container).toMatchObject([
    { type: "translate", offset: [1, 2, 3] },
    { type: "translate", offset: [-1, -2, -3] },
    { type: "translate", offset: [4, 5, 6] },
  ])
})
