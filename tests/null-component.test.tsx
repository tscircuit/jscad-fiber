import { test, expect } from "bun:test"
import { createJSCADRenderer } from "../lib"
import { jscadPlanner } from "jscad-planner"

const NullComponent = () => null

test("components can return null without throwing", () => {
  const container: any[] = []
  const renderer = createJSCADRenderer(jscadPlanner as any)
  const root = renderer.createJSCADRoot(container)
  expect(() => root.render(<NullComponent />)).not.toThrow()
  expect(container).toHaveLength(0)
})
