import { test, expect } from "bun:test"
import { jscadPlanner } from "jscad-planner"
import { createJSCADRenderer } from "../../lib"
import { Colorize, Cube } from "lib/jscad-fns"

test("planner-1 should render properly to jscad-plan sync", () => {
  const container = []
  const renderer = createJSCADRenderer(jscadPlanner as any)
  const root = renderer.createJSCADRoot(container)
  root.render(
    <Colorize color={"red"}>
      <Cube size={10} />
    </Colorize>,
  )

  expect(container).toMatchSnapshot()
})

test("planner-1 should render properly to jscad-plan async", async () => {
  const container = []
  const renderer = createJSCADRenderer(jscadPlanner as any)
  const root = renderer.createJSCADRoot(container)

  await new Promise<void>((resolve) => {
    root.render(
      <Colorize color={"red"}>
        <Cube size={10} />
      </Colorize>,
      resolve,
    )
  })

  expect(container).toMatchSnapshot()
})
