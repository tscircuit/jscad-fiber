import { expect, test } from "bun:test"
import modeling from "@jscad/modeling"
import { jscadPlanner } from "jscad-planner"
import {
  Cube,
  Cuboid,
  Cylinder,
  MinimalMode,
  Sphere,
  convertDistance,
  createJSCADRenderer,
  renderToJscadPlan,
} from "../lib"

test("convertDistance converts unit strings and numbers to mm", () => {
  expect(convertDistance(10)).toBe(10)
  expect(convertDistance("10mm")).toBe(10)
  expect(convertDistance("2cm")).toBe(20)
  expect(convertDistance("1in")).toBeCloseTo(25.4)
  expect(convertDistance("100mil")).toBeCloseTo(2.54)
  expect(convertDistance("500um")).toBeCloseTo(0.5)
  expect(convertDistance("15")).toBe(15)
})

test("non-minimal mode applies distance conversion, position props, and rotation helpers", () => {
  const plan = renderToJscadPlan(
    <Cuboid
      size={["1cm", "20mm", "1in"]}
      position={["5mm", "1cm", 2]}
      rotation={["90deg", 0, 0]}
      color="red"
    />,
  )

  expect(plan).toEqual({
    type: "translate",
    vector: [5, 10, 2],
    shape: {
      type: "colorize",
      color: [1, 0, 0],
      shape: {
        type: "rotate",
        angles: [Math.PI / 2, 0, 0],
        shape: {
          type: "cuboid",
          size: [10, 20, 25.4],
        },
      },
    },
  } as any)

  const xyzPlan = renderToJscadPlan(<Cube size="10mm" x="2mm" y="3cm" z={4} />)
  expect(xyzPlan).toEqual({
    type: "translate",
    vector: [2, 30, 4],
    shape: {
      type: "cube",
      size: 10,
    },
  } as any)
})

test("minimal mode uses jscad directly and bypasses helper wrappers", () => {
  const calls: Array<{ fn: string; options: any }> = []
  const spyJscad = {
    ...jscadPlanner,
    primitives: {
      ...jscadPlanner.primitives,
      cube: (options: any) => {
        calls.push({ fn: "cube", options })
        return { type: "cube", ...options }
      },
      sphere: (options: any) => {
        calls.push({ fn: "sphere", options })
        return { type: "sphere", ...options }
      },
    },
  }

  const container: any[] = []
  const renderer = createJSCADRenderer(spyJscad as any, { minimal: true })
  const root = renderer.createJSCADRoot(container)
  root.render(
    <Cube
      size={10}
      center={[1, 2, 3]}
      position={[9, 9, 9]}
      rotation="90deg"
      color="red"
    />,
  )

  expect(calls).toEqual([
    {
      fn: "cube",
      options: {
        size: 10,
        center: [1, 2, 3],
      },
    },
  ])
  expect(container).toEqual([
    {
      type: "cube",
      size: 10,
      center: [1, 2, 3],
    },
  ])

  // Native @jscad/modeling execution in minimal mode
  const nativeContainer: any[] = []
  createJSCADRenderer(modeling as any, { minimal: true })
    .createJSCADRoot(nativeContainer)
    .render(<Cylinder radius={5} height={10} center={[10, 20, 30]} />)

  expect(nativeContainer).toHaveLength(1)
  const bounds = modeling.measurements.measureBoundingBox(nativeContainer[0])
  expect(bounds[0][0]).toBeCloseTo(5)
  expect(bounds[1][0]).toBeCloseTo(15)
  expect(bounds[0][2]).toBeCloseTo(25)
  expect(bounds[1][2]).toBeCloseTo(35)
})

test("MinimalMode wrapper and component minimal prop toggle minimal mode", () => {
  const plan = renderToJscadPlan(
    <MinimalMode>
      <Sphere radius={5} rotation="45deg" color="blue" />
    </MinimalMode>,
  )

  expect(plan).toEqual({
    type: "sphere",
    radius: 5,
    segments: 32,
  } as any)

  expect(() =>
    renderToJscadPlan(<Cube size="10mm" />, { minimal: true }),
  ).toThrow("minimal mode")
})
