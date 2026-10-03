import { expect, test } from "bun:test"
import modeling from "@jscad/modeling"
import { executeJscadOperations } from "jscad-planner"
import { jscad, renderToJscadPlan } from "../lib/headless"
import { createJSCADRenderer } from "../lib/renderer"
import { MotorSpacer, SpacerSolid, holeCenters } from "../examples/motor-spacer"
import { useState } from "react"

function renderSolid(element: React.ReactElement) {
  const container: any[] = []
  createJSCADRenderer(modeling as any)
    .createJSCADRoot(container)
    .render(element)
  return container
}

test("preserves named reference rectangles under ordinary transforms", () => {
  const plan = renderToJscadPlan(<MotorSpacer height={10} />)
  const serialized = JSON.stringify(plan)
  const roots = JSON.parse(serialized).shapes
  expect(roots).toHaveLength(3)
  expect(roots[1]).toEqual({
    type: "rotate",
    angles: [0, Math.PI, 0],
    shape: {
      type: "polygon",
      points: [
        [-21, -21],
        [21, -21],
        [21, 21],
        [-21, 21],
      ],
      name: "motor",
      reference: true,
    },
  })
  expect(roots[2]).toEqual({
    type: "translate",
    vector: [0, 0, 10],
    shape: {
      type: "polygon",
      points: [
        [-21, -21],
        [21, -21],
        [21, 21],
        [-21, 21],
      ],
      name: "board",
      reference: true,
    },
  })
  expect(
    JSON.parse(JSON.stringify(renderToJscadPlan(<MotorSpacer height={18} />)))
      .shapes[2].vector,
  ).toEqual([0, 0, 18])
  // Calls are isolated; rendering a different height cannot mutate an old plan.
  expect(JSON.stringify(plan)).toBe(serialized)
})

test("spacer plan executes with existing interpreters and reference planes are hidden by native rendering", () => {
  for (const height of [10, 18]) {
    const plan = renderToJscadPlan(<SpacerSolid height={height} />)
    const solid = executeJscadOperations(
      modeling as any,
      JSON.parse(JSON.stringify(plan)),
    )
    const native = renderSolid(<MotorSpacer height={height} />)
    expect(native).toHaveLength(1)
    expect(modeling.geometries.geom3.toPolygons(native[0])).toEqual(
      modeling.geometries.geom3.toPolygons(solid),
    )
    const bounds = modeling.measurements.measureBoundingBox(solid)
    const expected = [
      [-21, -21, 0],
      [21, 21, height],
    ]
    for (let corner = 0; corner < 2; corner++) {
      for (let axis = 0; axis < 3; axis++) {
        expect(bounds[corner][axis]).toBeCloseTo(expected[corner][axis], 8)
      }
    }
    for (const [x, y, radius] of [
      [0, 0, 14.9],
      ...holeCenters.map(([x, y]) => [x, y, 1.5]),
    ]) {
      const probe = modeling.primitives.cylinder({
        radius,
        height: height + 2,
        center: [x, y, height / 2],
      })
      expect(
        modeling.measurements.measureVolume(
          modeling.booleans.intersect(solid, probe),
        ),
      ).toBeCloseTo(0)
    }
  }
})

test("nested fragments, arrays and null components produce executable boolean plans", () => {
  const Hidden = () => null
  const Posts = () => (
    <>
      {[0, 3].map((x) => (
        <jscad.cuboid key={x} size={[2, 2, 2]} center={[x, 0, 0]} />
      ))}
      <Hidden />
    </>
  )
  const solid = executeJscadOperations(
    modeling as any,
    renderToJscadPlan(
      <jscad.union>
        <Posts />
        <Hidden />
      </jscad.union>,
    ),
  )
  expect(modeling.measurements.measureVolume(solid)).toBeCloseTo(16)
})

test("reference-only nested branches disappear from native geometry", () => {
  expect(
    renderSolid(
      <jscad.union>
        <jscad.cuboid size={[2, 2, 2]} />
        <jscad.translate z={10}>
          <jscad.rectangle name="mount" size={[2, 2]} reference />
        </jscad.translate>
      </jscad.union>,
    ),
  ).toHaveLength(1)
  expect(() =>
    renderToJscadPlan(<jscad.rectangle size={[2, 2]} reference />),
  ).toThrow("nonblank")
})

test("headless compiler propagates component errors and rejects empty/nonfinite plans", () => {
  function Broken(): never {
    throw new Error("broken geometry")
  }
  const HookComponent = () => {
    useState(1)
    return <jscad.cube size={2} />
  }
  expect(() => renderToJscadPlan(<Broken />)).toThrow("broken geometry")
  expect(() => renderToJscadPlan(<HookComponent />)).toThrow()
  expect(() => renderToJscadPlan(null)).toThrow("empty")
  expect(() => renderToJscadPlan(<jscad.cube size={NaN} />)).toThrow("finite")
})

test("rectangle profiles extrude as one operation rather than nested arrays", () => {
  const geometry = executeJscadOperations(
    modeling as any,
    renderToJscadPlan(
      <jscad.extrudeLinear height={4}>
        <jscad.rectangle size={[2, 3]} />
      </jscad.extrudeLinear>,
    ),
  )
  expect(modeling.measurements.measureVolume(geometry)).toBeCloseTo(24)
})

test("headless bundle does not import the viewer, Three.js or modeling kernel", async () => {
  const result = await Bun.build({
    entrypoints: [new URL("../lib/headless.ts", import.meta.url).pathname],
    target: "browser",
    packages: "external",
  })
  expect(result.success).toBe(true)
  const source = await result.outputs[0].text()
  expect(source).not.toMatch(/from ["'](?:three|@jscad\/modeling)/)
  expect(source).not.toContain("OrbitControls")
  expect(source).not.toContain("document.createElement")
})

test("colored groups and hulls compile without nested operation arrays", () => {
  for (const Hull of [jscad.hull, jscad.hullChain]) {
    const plan = renderToJscadPlan(
      <jscad.colorize color={[1, 0, 0]}>
        <Hull>
          <jscad.cuboid size={[2, 2, 2]} />
          <jscad.cuboid size={[2, 2, 2]} center={[3, 0, 0]} />
        </Hull>
        <jscad.cuboid size={[2, 2, 2]} center={[9, 0, 0]} />
      </jscad.colorize>,
    )
    const geometry = executeJscadOperations(modeling as any, plan)
    expect(modeling.measurements.measureVolume(geometry)).toBeCloseTo(28)
  }
  expect(
    renderSolid(
      <jscad.colorize color="red">
        <jscad.rectangle reference name="hidden" size={[2, 2]} />
      </jscad.colorize>,
    ),
  ).toHaveLength(0)
})
