import type { Geom2, Geom3, Path2 } from "@jscad/modeling/src/geometries/types"

export type NativeGeometry = Geom2 | Path2 | Geom3

/** Native geometry stays in its authored coordinates. Apply this column-major
 * local-to-model matrix after reading its points, especially for planar paths
 * placed outside XY by a parent Rotate.
 */
export interface JscadReferenceFeature {
  geometry: NativeGeometry
  matrix: number[]
}

export interface JscadModel {
  geometries: NativeGeometry[]
  referenceFeatures: Record<string, JscadReferenceFeature>
}
