import { test, expect } from "bun:test"
import { testRender } from "tests/fixtures/test-render"
import { Footprinter3d } from "jscad-electronics"
import { createJSCADRenderer } from "lib"
import { jscadPlanner } from "jscad-planner"

const { createJSCADRoot } = createJSCADRenderer(jscadPlanner as any)

test("repro1-translate-bug without jscad-planner", () => {
  testRender(<Footprinter3d footprint="tssop16" />)
})

test("repro1-translate-bug with jscad-planner", () => {
  const jscadPlan: any[] = []
  const root = createJSCADRoot(jscadPlan)
  root.render(<Footprinter3d footprint="tssop16" />)
})
