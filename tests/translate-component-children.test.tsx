import { expect, test } from "bun:test"
import { Cuboid, Translate } from "lib/jscad-fns"
import { createJSCADRenderer } from "../lib"

const fakeJscad = {
  primitives: {
    cuboid: (props: any) => ({ type: "cuboid", ...props }),
  },
  transforms: {
    translate: (offset: [number, number, number], child: any) => ({
      type: "translate",
      offset,
      child,
    }),
  },
} as any

const CompositeShape = () => (
  <>
    <Cuboid size={[1, 1, 1]} />
    <Cuboid size={[2, 2, 2]} />
  </>
)

test("Translate accepts higher-level components with multiple children", () => {
  const container = []
  const renderer = createJSCADRenderer(fakeJscad)
  const root = renderer.createJSCADRoot(container)

  root.render(
    <Translate offset={[1, 2, 3]}>
      <CompositeShape />
    </Translate>,
  )

  expect(container).toMatchObject([
    {
      type: "translate",
      offset: [1, 2, 3],
      child: [
        { type: "cuboid", size: [1, 1, 1] },
        { type: "cuboid", size: [2, 2, 2] },
      ],
    },
  ])
})
