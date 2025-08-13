import { jscadPlanner } from "jscad-planner"
import { createJSCADRenderer } from "../lib"
import { Sphere, Colorize } from "lib/jscad-fns"
import { test, expect } from "bun:test"

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
