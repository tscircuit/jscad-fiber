import { describe, expect, it, spyOn } from "bun:test"
import { jscadPlanner } from "jscad-planner"
import React from "react"
import * as THREE from "three"
import {
  Cube,
  JsCadFixture,
  JsCadView,
  Sphere,
  Subtract,
  createJSCADRenderer,
} from "../lib"

function evaluateFixtureHooks(
  Component: typeof JsCadFixture | typeof JsCadView,
  props: React.ComponentProps<typeof JsCadFixture>,
) {
  const containerRef = { current: null }
  const sceneRef = { current: new THREE.Scene() }
  const gridRef = { current: new THREE.GridHelper(100, 100) }
  gridRef.current.visible = false

  const refs = [containerRef, sceneRef, gridRef]
  let refIndex = 0
  const effects: Array<() => void> = []

  const useRefSpy = spyOn(React, "useRef").mockImplementation(
    () => refs[refIndex++] as any,
  )
  const useEffectSpy = spyOn(React, "useEffect").mockImplementation(((
    effect: () => void,
  ) => {
    effects.push(effect)
  }) as any)

  try {
    Component(props)
    for (const effect of effects) {
      effect()
    }
  } finally {
    useRefSpy.mockRestore()
    useEffectSpy.mockRestore()
  }

  return {
    scene: sceneRef.current,
    grid: gridRef.current,
  }
}

describe("JsCadFixture and JsCadView background and grid defaults", () => {
  it("defaults JsCadFixture to a white background with a visible grid", () => {
    const { scene, grid } = evaluateFixtureHooks(JsCadFixture, {
      children: <Cube size={10} />,
    })

    expect(grid.visible).toBe(true)
    expect(scene.background).toBeInstanceOf(THREE.Color)
    expect((scene.background as THREE.Color).getHexString()).toBe("ffffff")
  })

  it("allows changing backgroundColor and hiding grid on JsCadFixture", () => {
    const { scene, grid } = evaluateFixtureHooks(JsCadFixture, {
      children: <Cube size={10} />,
      backgroundColor: "#1e293b",
      showGrid: false,
    })

    expect(grid.visible).toBe(false)
    expect(scene.background).toBeInstanceOf(THREE.Color)
    expect((scene.background as THREE.Color).getHexString()).toBe("1e293b")
  })

  it("defaults JsCadView to a white background with a visible grid and supports custom backgroundColor", () => {
    const defaultResult = evaluateFixtureHooks(JsCadView, {
      children: <Cube size={10} />,
    })
    expect(defaultResult.grid.visible).toBe(true)
    expect((defaultResult.scene.background as THREE.Color).getHexString()).toBe(
      "ffffff",
    )

    const customResult = evaluateFixtureHooks(JsCadView, {
      children: <Cube size={10} />,
      backgroundColor: 0x00ff00,
      showGrid: false,
    })
    expect(customResult.grid.visible).toBe(false)
    expect((customResult.scene.background as THREE.Color).getHexString()).toBe(
      "00ff00",
    )
  })

  it("renders JsCadFixture children through createJSCADRenderer", () => {
    const container: any[] = []
    const renderer = createJSCADRenderer(jscadPlanner as any)
    const root = renderer.createJSCADRoot(container)

    root.render(
      <JsCadFixture backgroundColor="#f0f0f0">
        <Subtract>
          <Cube size={10} />
          <Sphere radius={6.8} />
        </Subtract>
      </JsCadFixture>,
    )

    expect(container).toHaveLength(1)
    expect(container[0].type).toBe("subtract")
  })
})
