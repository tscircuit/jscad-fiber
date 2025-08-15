import { test, expect } from "bun:test"
import { createJSCADRenderer } from "../lib"
import * as jscad from "@jscad/modeling"

const NullComponent = () => null

test("components can return null without throwing", () => {
  const container: any[] = []
  const renderer = createJSCADRenderer(jscad)
  const root = renderer.createJSCADRoot(container)
  expect(() => root.render(<NullComponent />)).not.toThrow()
  expect(container).toHaveLength(0)
})
