import { expect, test } from "bun:test"
import modeling from "@jscad/modeling"
import { executeJscadOperations } from "jscad-planner"
import { LineBasicMaterial, MeshStandardMaterial } from "three"
import type { Scene } from "three"
import { useEffect } from "react"
import {
  Material,
  Colorize,
  Cube,
  Custom,
  ExtrudeLinear,
  Hull,
  Rectangle,
  Rotate,
  Sphere,
  Subtract,
  Translate,
  Union,
  jscad,
  renderToJscadPlan,
  materials,
  type MaterialOptions,
} from "../lib/headless"
import { createThreeMaterial } from "../lib/create-three-material"
import { createJSCADRenderer } from "../lib/renderer"
import { useJSCADRenderer } from "../lib/useJSCADRenderer"

const silver: MaterialOptions = {
  color: "silver",
  metalness: 1,
  roughness: 0.25,
}

function render(element: React.ReactElement): any[] {
  const shapes: any[] = []
  createJSCADRenderer(modeling as any)
    .createJSCADRoot(shapes)
    .render(element)
  return shapes
}

test("material prop reaches native solids without changing geometry", () => {
  const [solid] = render(<Cube size={10} material={silver} />)
  expect(solid.material).toEqual(silver)
  expect(modeling.measurements.measureVolume(solid)).toBeCloseTo(1000)
  expect(render(<Cube size={10} />)[0].material).toBeUndefined()
  expect(createThreeMaterial(solid.material)).toBeInstanceOf(
    MeshStandardMaterial,
  )
})

test("Material and jscad.material turn top-level props into executable material operations", () => {
  const plan = renderToJscadPlan(
    <jscad.material color="silver" metalness={1} roughness={0.25}>
      <jscad.cube size={2} />
    </jscad.material>,
  )
  expect(plan).toEqual({
    type: "applyMaterial",
    material: silver,
    shape: { type: "cube", size: 2 },
  })
  const geometry = executeJscadOperations(
    modeling as any,
    JSON.parse(JSON.stringify(plan)),
  )
  expect(geometry.material).toEqual(silver)
  const source = modeling.primitives.cube({ size: 2 })
  expect(materials.applyMaterial(silver, source).material).toEqual(silver)
  expect(source).not.toHaveProperty("material")
  const native = render(
    <Material {...silver}>
      <Cube size={2} />
      <Sphere radius={1} />
    </Material>,
  )
  expect(native).toHaveLength(2)
  expect(native.map((shape) => shape.material)).toEqual([silver, silver])
  expect(
    render(
      <Material {...silver}>
        <Rectangle size={[2, 2]} reference name="hidden" />
      </Material>,
    ),
  ).toEqual([])
})

test("async material groups update a flat renderer container", async () => {
  const container: any[] = []
  const root = createJSCADRenderer(modeling as any).createJSCADRoot(container)
  const update = (element: React.ReactElement | null) =>
    new Promise<void>((resolve) => root.render(element as any, resolve))
  try {
    await update(
      <Material {...silver}>
        <Cube size={2} />
        <Sphere radius={1} />
      </Material>,
    )
    expect(container).toHaveLength(2)
    expect(container.map((shape) => shape.material)).toEqual([silver, silver])
    await update(
      <Material color="blue">
        <Cube size={3} />
      </Material>,
    )
    expect(container).toHaveLength(1)
    expect(container[0].material).toEqual({ color: "blue" })
    expect(modeling.measurements.measureVolume(container[0])).toBeCloseTo(27)
  } finally {
    await update(null)
  }
  expect(container).toHaveLength(0)
})

test("translation, rotation and colorization retain materials", () => {
  const [solid] = render(
    <Colorize color="red">
      <Translate x={12}>
        <Rotate angles={[0, 0, Math.PI / 2]}>
          <Cube size={10} center={[0, 0, 5]} material={silver} />
        </Rotate>
      </Translate>
    </Colorize>,
  )
  expect(solid.material).toEqual(silver)
  expect(solid.color).toEqual([1, 0, 0, 1])
  expect(modeling.measurements.measureBoundingBox(solid) as number[][]).toEqual(
    [
      [7, -5, 0],
      [17, 5, 10],
    ],
  )
  const material = createThreeMaterial(solid.material) as MeshStandardMaterial
  expect(material.color.getHexString()).toBe("c0c0c0")
  expect(material.vertexColors).toBe(false)
})

test("subtraction inherits the base material and allows a result override", () => {
  const tree = (
    <Subtract>
      <Cube size={10} material={silver} />
      <Sphere radius={4} material={{ color: "red" }} />
    </Subtract>
  )
  const [solid] = render(tree)
  expect(solid.material).toEqual(silver)
  expect(modeling.measurements.measureVolume(solid)).toBeLessThan(1000)
  const [overridden] = render(
    <Translate material={{ color: "blue" }}>{tree}</Translate>,
  )
  expect(overridden.material).toEqual({ color: "blue" })
})

test("unions and hulls apply a material to the combined result", () => {
  for (const Combine of [Union, Hull]) {
    const children = [
      <Cube key="a" size={2} material={silver} />,
      <Cube key="b" size={2} center={[3, 0, 0]} material={{ color: "red" }} />,
    ]
    expect(render(<Combine>{children}</Combine>)[0].material).toBeUndefined()
    expect(
      render(<Combine material={silver}>{children}</Combine>)[0].material,
    ).toEqual(silver)
  }
})

test("material applies to arrays and extrusion profiles", () => {
  const [first, second] = render(
    <Translate x={3} material={silver}>
      <Cube size={2} />
      <Sphere radius={2} />
    </Translate>,
  )
  expect(first.material).toEqual(silver)
  expect(second.material).toEqual(silver)
  expect(
    render(
      <ExtrudeLinear height={3}>
        <Rectangle size={[2, 2]} material={silver} />
      </ExtrudeLinear>,
    )[0].material,
  ).toEqual(silver)
  expect(
    render(
      <Rectangle size={[2, 2]} name="hidden" reference material={silver} />,
    ),
  ).toEqual([])
})

test("Custom materials do not mutate the input geometry", () => {
  const geometry = modeling.primitives.cube({ size: 2 })
  const [solid] = render(<Custom geometry={geometry} material={silver} />)
  expect(solid.material).toEqual(silver)
  expect(geometry).not.toHaveProperty("material")
  expect(solid).not.toBe(geometry)
})

test("headless plans preserve material metadata and stay executable", () => {
  const plan = renderToJscadPlan(
    <jscad.translate x={5}>
      <jscad.cube size={2} material={silver} />
    </jscad.translate>,
  )
  expect(plan.material).toEqual(silver)
  if (plan.type !== "translate") throw new Error("Expected translate")
  expect(plan.shape.material).toEqual(silver)
  expect(JSON.parse(JSON.stringify(plan))).toEqual(plan)
  const solid = executeJscadOperations(modeling as any, plan)
  expect(solid.material).toEqual(silver)
  expect(modeling.measurements.measureBoundingBox(solid) as number[][]).toEqual(
    [
      [4, -1, -1],
      [6, 1, 1],
    ],
  )
  expect(() =>
    renderToJscadPlan(<jscad.cube size={2} material={{ roughness: NaN }} />),
  ).toThrow("finite")
})

test("Three materials support colors, surface settings and transparency", () => {
  const material = createThreeMaterial({
    ...silver,
    opacity: 0.4,
    emissive: "red",
    emissiveIntensity: 2,
    flatShading: true,
    wireframe: true,
  }) as MeshStandardMaterial
  expect(material.metalness).toBe(1)
  expect(material.roughness).toBe(0.25)
  expect(material.opacity).toBe(0.4)
  expect(material.transparent).toBe(true)
  expect(material.emissive.getHexString()).toBe("ff0000")
  expect(material.emissiveIntensity).toBe(2)
  expect(material.flatShading).toBe(true)
  expect(material.wireframe).toBe(true)
  expect(
    createThreeMaterial({ opacity: 0.4, transparent: false }).transparent,
  ).toBe(false)
  expect(
    (
      createThreeMaterial({ color: [0.1, 0.2, 0.3] }) as MeshStandardMaterial
    ).color.toArray(),
  ).toEqual([0.1, 0.2, 0.3])
  expect(
    (
      createThreeMaterial({ color: 0xff0000 }) as MeshStandardMaterial
    ).color.getHexString(),
  ).toBe("ff0000")
  expect(
    (
      createThreeMaterial(
        { wireframe: true },
        { wireframe: false },
      ) as MeshStandardMaterial
    ).wireframe,
  ).toBe(false)
})

test("defaults keep existing geometry colors and 2D material settings are filtered", () => {
  const [solid] = render(
    <Cube size={2} color="red" material={{ roughness: 0.4 }} />,
  )
  const material = createThreeMaterial(solid.material) as MeshStandardMaterial
  expect(solid.color).toEqual([1, 0, 0, 1])
  expect(material.vertexColors).toBe(true)
  expect(material.roughness).toBe(0.4)
  const defaults = createThreeMaterial() as MeshStandardMaterial
  expect(defaults.vertexColors).toBe(true)
  expect(defaults.roughness).toBe(1)
  expect(defaults.metalness).toBe(0)
  expect(defaults.opacity).toBe(1)
  expect(defaults.transparent).toBe(false)
  const line = createThreeMaterial({ ...silver, opacity: 0.5 }, { is2D: true })
  expect(line).toBeInstanceOf(LineBasicMaterial)
  expect((line as LineBasicMaterial).color.getHexString()).toBe("c0c0c0")
  expect(line.transparent).toBe(true)
  expect(line.opacity).toBe(0.5)
  expect(line).not.toHaveProperty("metalness")
})

test("Three renderer displays materials on initial render and updates", async () => {
  const root = createJSCADRenderer(modeling as any).createJSCADRoot([])
  function Probe({
    children,
    onScene,
  }: {
    children: React.ReactNode
    onScene: (scene: Scene) => void
  }) {
    const scene = useJSCADRenderer(children)
    useEffect(() => {
      if (scene) onScene(scene)
    }, [scene])
    return null
  }
  function update(children: React.ReactNode): Promise<Scene> {
    return new Promise((resolve) => {
      root.render(<Probe onScene={resolve}>{children}</Probe>, () => {})
    })
  }
  try {
    const initial = await update(<Cube size={2} material={silver} />)
    expect(initial.children).toHaveLength(1)
    const initialMaterial = (initial.children[0] as any)
      .material as MeshStandardMaterial
    expect(initialMaterial.color.getHexString()).toBe("c0c0c0")
    expect(initialMaterial.metalness).toBe(1)
    let disposed = false
    initialMaterial.addEventListener("dispose", () => {
      disposed = true
    })
    const updated = await update(
      <Cube size={2} material={{ color: "blue", opacity: 0.5 }} />,
    )
    expect(updated).not.toBe(initial)
    expect(updated.children).toHaveLength(1)
    const updatedMaterial = (updated.children[0] as any)
      .material as MeshStandardMaterial
    expect(updatedMaterial.color.getHexString()).toBe("0000ff")
    expect(updatedMaterial.transparent).toBe(true)
    expect(disposed).toBe(true)
    const group = await update(
      <Translate material={silver}>
        <Cube size={2} />
        <Rectangle size={[2, 2]} />
      </Translate>,
    )
    expect(group.children).toHaveLength(2)
    expect((group.children[0] as any).material).toBeInstanceOf(
      MeshStandardMaterial,
    )
    expect((group.children[1] as any).material).toBeInstanceOf(
      LineBasicMaterial,
    )
    const smallerGroup = await update(
      <Translate material={silver}>
        <Cube size={2} />
      </Translate>,
    )
    expect(smallerGroup.children).toHaveLength(1)
    const removed = await update(<Cube size={2} />)
    const defaultMaterial = (removed.children[0] as any)
      .material as MeshStandardMaterial
    expect(defaultMaterial.color.getHexString()).toBe("ffffff")
    expect(defaultMaterial.metalness).toBe(0)
    const explicit = await update(
      <jscad.material {...silver}>
        <Cube size={2} />
      </jscad.material>,
    )
    expect((explicit.children[0] as any).material.metalness).toBe(1)
    const changed = await update(
      <jscad.material color="red">
        <Cube size={2} />
        <Sphere radius={1} />
      </jscad.material>,
    )
    expect(changed.children).toHaveLength(2)
    expect((changed.children[1] as any).material.color.getHexString()).toBe(
      "ff0000",
    )
  } finally {
    await new Promise<void>((resolve) => root.render(null as any, resolve))
  }
})
