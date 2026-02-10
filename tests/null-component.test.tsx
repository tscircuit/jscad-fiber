import { expect, test } from "bun:test"
import { jscadPlanner } from "jscad-planner"
import { createJSCADRenderer } from "../lib"

const NullComponent = () => null

test("components can return null without throwing", () => {
  const container: any[] = []
  const renderer = createJSCADRenderer(jscadPlanner as any)
  const root = renderer.createJSCADRoot(container)
  expect(() => root.render(<NullComponent />)).not.toThrow()
  expect(container).toHaveLength(0)
})
