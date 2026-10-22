import { Fragment, type ReactNode } from "react"
import type * as Modeling from "@jscad/modeling"
import { createHostConfig } from "./create-host-config"
import type { JSCADModule } from "./jscad-primitives"
import type {
  JscadModel,
  JscadReferenceFeature,
  NativeGeometry,
} from "./model-types"

export type {
  NativeGeometry,
  JscadReferenceFeature,
  JscadModel,
} from "./model-types"

/** Evaluate pure JSX with a supplied native JSCAD kernel. Named features
 * retain their native geometry and ancestor transform; reference nodes are
 * omitted before CSG. This is native evaluation, not a serializable plan.
 * Hooks and async components are not supported by this synchronous renderer.
 */
export function renderToJscadModel(
  element: ReactNode,
  jscad: typeof Modeling,
): JscadModel {
  const referenceFeatures: Record<string, JscadReferenceFeature> =
    Object.create(null)
  const featureOptions = {
    transformFeatureMatrix: (
      matrix: number[],
      type: "translate" | "rotate",
      vector: [number, number, number],
    ) => {
      if (vector.length !== 3 || !vector.every(Number.isFinite))
        throw new Error(
          "Named features require three finite transform coordinates",
        )
      const { mat4 } = jscad.maths
      const local =
        type === "translate"
          ? mat4.fromTranslation(mat4.create(), vector)
          : mat4.fromTaitBryanRotation(
              mat4.create(),
              vector[2],
              vector[1],
              vector[0],
            )
      const result = mat4.multiply(
        mat4.create(),
        matrix as Modeling.maths.mat4.Mat4,
        local,
      )
      if (!result.every(Number.isFinite))
        throw new Error("Named features require finite transforms")
      return [...result]
    },
    collectFeature: (
      name: string,
      geometry: NativeGeometry,
      matrix: number[],
    ) => {
      if (Object.hasOwn(referenceFeatures, name))
        throw new Error(`Duplicate named feature "${name}"`)
      if (
        !jscad.geometries.geom2.isA(geometry) &&
        !jscad.geometries.path2.isA(geometry) &&
        !jscad.geometries.geom3.isA(geometry)
      )
        throw new Error(
          `Named feature "${name}" requires native Geom2, Path2 or Geom3 geometry`,
        )
      referenceFeatures[name] = { geometry, matrix: [...matrix] }
    },
  }
  const host = createHostConfig(jscad as unknown as JSCADModule, {
    ...featureOptions,
    collectExtrusionOutlines: (geometry, extrusion, matrix) => {
      if (
        !jscad.geometries.geom2.isA(geometry) &&
        !jscad.geometries.path2.isA(geometry)
      )
        throw new Error(
          "Named extrusion outlines require a native Geom2 or closed Path2 profile",
        )
      if (
        jscad.geometries.path2.isA(geometry) &&
        !(geometry as Modeling.geometries.path2.Path2).isClosed
      )
        throw new Error(
          "Named extrusion outlines require a closed Path2 profile",
        )
      if (extrusion.topOutlineName !== undefined) {
        const translated = featureOptions.transformFeatureMatrix(
          matrix,
          "translate",
          [0, 0, extrusion.height],
        )
        const end = featureOptions.transformFeatureMatrix(
          translated,
          "rotate",
          [0, 0, extrusion.twistAngle ?? 0],
        )
        featureOptions.collectFeature(extrusion.topOutlineName, geometry, end)
      }
      if (extrusion.bottomOutlineName !== undefined)
        featureOptions.collectFeature(
          extrusion.bottomOutlineName,
          geometry,
          matrix,
        )
    },
  })
  const result = host.createInstance(
    Fragment as unknown as string,
    { children: element },
    [],
    jscad,
    null,
  )
  const geometries = (
    Array.isArray(result) ? result.flat(Infinity) : [result]
  ).filter(Boolean)
  return { geometries, referenceFeatures }
}
