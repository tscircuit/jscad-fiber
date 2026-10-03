import { Fragment, type ReactNode } from "react"
import { jscadPlanner, type JscadOperation } from "jscad-planner"
import { createHostConfig } from "./create-host-config"
import type { JSCADModule } from "./jscad-primitives"

const planner = {
  ...jscadPlanner,
  primitives: {
    ...jscadPlanner.primitives,
    // Exact lowering to a standard polygon keeps rectangle plans compatible
    // with existing interpreters. Reference metadata is attached by the host.
    rectangle: ({ size: [width, height] }: { size: [number, number] }) => {
      if (![width, height].every((n) => Number.isFinite(n) && n > 0)) {
        throw new Error("Rectangles require two positive finite dimensions")
      }
      return jscadPlanner.primitives.polygon({
        points: [
          [-width / 2, -height / 2],
          [width / 2, -height / 2],
          [width / 2, height / 2],
          [-width / 2, height / 2],
        ],
      })
    },
  },
}

// The host accepts either kernel geometry or operation nodes. This adapter
// supports the subset exported by the jscad namespace; no geometry is evaluated.
const host = createHostConfig(planner as unknown as JSCADModule, {
  preserveReferences: true,
})

function validateSerializable(value: unknown): void {
  if (
    typeof value === "function" ||
    typeof value === "symbol" ||
    typeof value === "bigint" ||
    (typeof value === "number" && !Number.isFinite(value))
  ) {
    throw new Error("JSCAD plans must contain finite, JSON-serializable values")
  }
  if (Array.isArray(value)) value.forEach(validateSerializable)
  else if (value && typeof value === "object")
    Object.values(value).forEach(validateSerializable)
}

/** Compile pure function components/Fragments into a serializable JSCAD plan.
 * No browser, Three.js, or modeling kernel is needed. Hooks and async components
 * are not supported by this synchronous compiler; component errors propagate.
 * Named reference rectangles remain in the plan for resolveReferencePlanes in
 * jscad-planner. Consumers must extract them before mesh generation/export.
 */
export function renderToJscadPlan(element: ReactNode): JscadOperation {
  const result = host.createInstance(
    Fragment as unknown as string,
    { children: element },
    [],
    planner,
    null,
  )
  const roots = (
    Array.isArray(result) ? result.flat(Infinity) : [result]
  ).filter(Boolean)
  if (!roots.length) throw new Error("Cannot compile an empty JSCAD plan")
  const plan: JscadOperation =
    roots.length === 1 ? roots[0] : { type: "union", shapes: roots }
  function validateOperation(operation: JscadOperation) {
    if (!operation || typeof operation.type !== "string")
      throw new Error(
        "Expected a JSCAD operation; raw Custom geometry is not supported by the plan compiler",
      )
    if ("shape" in operation) validateOperation(operation.shape)
    if ("shapes" in operation) operation.shapes.forEach(validateOperation)
  }
  validateOperation(plan)
  validateSerializable(plan)
  return plan
}
