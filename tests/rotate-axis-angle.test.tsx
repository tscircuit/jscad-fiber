import { expect, test } from "bun:test"
import { Rotate, Sphere } from "lib/jscad-fns"
import { createJSCADRenderer } from "../lib"

const fakeJscad = {
  primitives: {
    sphere: (props: any) => ({ type: "sphere", ...props }),
  },
  transforms: {
    rotate: (angles: [number, number, number], child: any) => ({
      type: "rotate",
      angles,
      child,
    }),
  },
} as any

test("Rotate supports axis and angle shorthand", () => {
  const container = []
  const renderer = createJSCADRenderer(fakeJscad)
  const root = renderer.createJSCADRoot(container)

  root.render(
    <Rotate axis="z" angle={90}>
      <Sphere radius={1} />
    </Rotate>,
  )

  expect(container).toHaveLength(1)
  expect(container[0].type).toBe("rotate")
  expect(container[0].angles[0]).toBe(0)
  expect(container[0].angles[1]).toBe(0)
  expect(container[0].angles[2]).toBeCloseTo(Math.PI / 2)
})
