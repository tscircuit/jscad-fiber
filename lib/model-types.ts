import type { Geom2, Geom3, Path2 } from "@jscad/modeling/src/geometries/types"

export type NativeGeometry = Geom2 | Path2 | Geom3

/** Native planar construction reference with full model-space placement. */
export type { NativeReference as JscadReferenceFeature } from "@tscircuit/jscad"
import type { NativeReference as JscadReferenceFeature } from "@tscircuit/jscad"

export interface JscadModel {
  geometries: NativeGeometry[]
  referenceFeatures: Record<string, JscadReferenceFeature>
}
