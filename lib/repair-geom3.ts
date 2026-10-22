import type * as Modeling from "@jscad/modeling"

type Geom3 = Modeling.geometries.geom3.Geom3

/** Weld floating-point joins before triangulating an explicitly repaired solid. */
export function repairGeom3(kernel: typeof Modeling, geometry: Geom3): Geom3 {
  if (!kernel.geometries?.geom3 || !kernel.modifiers?.generalize)
    throw new Error("Subtract repair requires a native JSCAD kernel")
  if (!kernel.geometries.geom3.isA(geometry))
    throw new Error("Subtract repair requires native Geom3 solids")
  const source = kernel.geometries.geom3.clone(geometry)
  const polygons = kernel.geometries.geom3.toPolygons(source)
  if (!polygons.length) return geometry
  const extent = Math.max(...kernel.measurements.measureDimensions(source))
  if (!Number.isFinite(extent) || extent <= 0)
    throw new Error("Subtract repair requires finite nonempty geometry")
  const epsilon = Math.max(extent * 1e-10, 1e-12)
  const welded = kernel.geometries.geom3.fromPoints(
    polygons.map((polygon) =>
      polygon.vertices.map((point) => {
        if (!point.every(Number.isFinite))
          throw new Error("Subtract repair requires finite coordinates")
        return point.map((value) => Math.round(value / epsilon) * epsilon) as [
          number,
          number,
          number,
        ]
      }),
    ),
  )
  const generalize = kernel.modifiers.generalize as unknown as (
    options: { snap: boolean; triangulate: boolean },
    shape: Geom3,
  ) => Geom3
  const repaired = generalize({ snap: false, triangulate: true }, welded)
  kernel.geometries.geom3.validate(repaired)
  return repaired
}
