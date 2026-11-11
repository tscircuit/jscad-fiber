import { describe, expect, it } from "bun:test"
import { jscadPlanner } from "jscad-planner"
import { Cube, JsCadFixture, createJSCADRenderer } from "../lib"

describe("JsCadFixture backgroundColor and showGrid defaults", () => {
  it("renders JsCadFixture with default white background and grid enabled, and accepts custom backgroundColor", () => {
    const container: any[] = []
    const renderer = createJSCADRenderer(jscadPlanner as any)
    const root = renderer.createJSCADRoot(container)

    root.render(
      <JsCadFixture backgroundColor="#f5f5f5" showGrid={true}>
        <Cube size={10} />
      </JsCadFixture>,
    )

    expect(container.length).toBeGreaterThan(0)
  })
})
