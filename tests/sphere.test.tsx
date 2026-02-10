import { expect, test } from "bun:test"
import { jscadPlanner } from "jscad-planner"
import { Colorize, Sphere } from "lib/jscad-fns"
import { createJSCADRenderer } from "../lib"

test("sphere should render properly to jscad-plan sync", () => {
  const container = []
  const renderer = createJSCADRenderer(jscadPlanner as any)
  const root = renderer.createJSCADRoot(container)
  root.render(
    <Colorize color={"red"}>
      <Sphere radius={1} />
    </Colorize>,
  )

  expect(container).toMatchSnapshot()
})
