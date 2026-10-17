import { expect, test } from "bun:test"
import modeling from "@jscad/modeling"
import { executeJscadOperations } from "jscad-planner"
import { Custom, jscad, renderToJscadPlan } from "../lib/headless"
import { createJSCADRenderer } from "../lib/renderer"

function renderSolid(element: React.ReactElement) {
  const container: any[] = []
  createJSCADRenderer(modeling as any)
    .createJSCADRoot(container)
    .render(element)
  return container
}

test("composes geometry from CommonJS JSCAD string code", () => {
  const code = `
    const jscad = require('@jscad/modeling')
    const { cube, sphere } = jscad.primitives
    const { subtract } = jscad.booleans

    const main = (params) => {
      return subtract(
        cube({ size: params.size ?? 10 }),
        sphere({ radius: 6, segments: 16 })
      )
    }

    module.exports = { main }
  `

  const solids = renderSolid(<Custom code={code} params={{ size: 12 }} />)
  expect(solids).toHaveLength(1)
  const bounds = modeling.measurements.measureBoundingBox(
    solids[0],
  ) as number[][]
  expect(bounds[0]).toEqual([-6, -6, -6])
  expect(bounds[1]).toEqual([6, 6, 6])
})

test("composes geometry from ES module and expression JSCAD string code and compiles to plan", () => {
  const esmCode = `
    import { primitives, booleans } from "@jscad/modeling"
    export const main = () => booleans.subtract(
      primitives.cuboid({ size: [10, 10, 10] }),
      primitives.cuboid({ size: [4, 4, 12] })
    )
  `

  const plan = renderToJscadPlan(
    <jscad.custom code={esmCode} center={[5, 0, 0]} color="red" />,
  )
  const solid = executeJscadOperations(modeling as any, plan)
  const bounds = modeling.measurements.measureBoundingBox(solid) as number[][]
  expect(bounds[0]).toEqual([0, -5, -5])
  expect(bounds[1]).toEqual([10, 5, 5])

  const exprSolids = renderSolid(<Custom code="primitives.cube({ size: 8 })" />)
  expect(exprSolids).toHaveLength(1)
  expect(modeling.measurements.measureVolume(exprSolids[0])).toBeCloseTo(512)
})
