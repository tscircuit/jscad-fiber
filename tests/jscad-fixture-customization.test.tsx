import { expect, test } from "bun:test"
import { jscadPlanner } from "jscad-planner"
import {
  Cube,
  JSCadThreeMesh,
  JsCadFixture,
  JsCadView,
  createJSCADRenderer,
} from "../lib"

test("JsCadFixture and JsCadView accept custom size, backgroundColor, and cameraPosition props", () => {
  expect(typeof JsCadFixture).toBe("function")
  expect(typeof JsCadView).toBe("function")
  expect(typeof JSCadThreeMesh).toBe("function")

  const fixtureElement = (
    <JsCadFixture
      zAxisUp
      showGrid={false}
      backgroundColor="#1a1a2e"
      cameraPosition={[20, 30, 40]}
      width={800}
      height="600px"
      style={{ border: "1px solid #333" }}
    >
      <Cube size={10} />
    </JsCadFixture>
  )

  expect(fixtureElement.props.backgroundColor).toBe("#1a1a2e")
  expect(fixtureElement.props.cameraPosition).toEqual([20, 30, 40])
  expect(fixtureElement.props.width).toBe(800)
  expect(fixtureElement.props.height).toBe("600px")
  expect(fixtureElement.props.showGrid).toBe(false)
  expect(fixtureElement.props.zAxisUp).toBe(true)

  const container: any[] = []
  const renderer = createJSCADRenderer(jscadPlanner as any)
  const root = renderer.createJSCADRoot(container)

  root.render(
    <JsCadView
      zAxisUp
      showGrid={false}
      backgroundColor="#112233"
      cameraPosition={[15, 25, 35]}
      width={640}
      height={480}
    >
      <Cube size={10} />
    </JsCadView>,
  )

  expect(container).toHaveLength(1)
})
