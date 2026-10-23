import { Fragment, type ReactNode } from "react"
import type * as Modeling from "@jscad/modeling"
import { withReferences } from "@tscircuit/jscad"
import { createHostConfig } from "./create-host-config"
import type { JSCADModule } from "./jscad-primitives"
import type { JscadModel, NativeGeometry } from "./model-types"

export type {
  NativeGeometry,
  JscadReferenceFeature,
  JscadModel,
} from "./model-types"

/** Evaluate pure JSX once using a reference-aware native kernel. The kernel
 * owns reference propagation; this renderer only collects the resulting names.
 * Hooks and async components are not supported by this synchronous renderer.
 */
export function renderToJscadModel(
  element: ReactNode,
  jscad: typeof Modeling,
): JscadModel {
  const kernel = withReferences(jscad)
  const host = createHostConfig(kernel as unknown as JSCADModule)
  const result = host.createInstance(
    Fragment as unknown as string,
    { children: element },
    [],
    kernel,
    null,
  )
  const shapes: NativeGeometry[] = (
    Array.isArray(result) ? result.flat(Infinity) : [result]
  ).filter(Boolean)
  const referenceFeatures = kernel.references.collect(shapes)
  const geometries = shapes.filter(
    (shape) =>
      !kernel.geometries.geom3.isA(shape) ||
      (shape as Modeling.geometries.geom3.Geom3).polygons.length > 0 ||
      kernel.references.list(shape).length === 0,
  )
  return { geometries, referenceFeatures }
}
