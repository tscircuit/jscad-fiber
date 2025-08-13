import { jscadPlanner } from "jscad-planner"
import { Cube, Subtract, createJSCADRenderer, JsCadView, Sphere } from "../lib"
import { it, describe, expect } from "bun:test"

describe("lol.tsx integration test", () => {
  it("should render JsCadView with Subtract operation properly", () => {
    const container: any[] = []
    const renderer = createJSCADRenderer(jscadPlanner as any)
    const root = renderer.createJSCADRoot(container)

    root.render(
      <JsCadView>
        <Subtract>
          <Cube size={10} />
          <Sphere radius={6.8} />
        </Subtract>
      </JsCadView>,
    )

    expect(container).toMatchSnapshot()
  })
})
