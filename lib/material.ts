/** Serializable appearance settings interpreted by the Three.js viewer. */
export interface MaterialOptions {
  /** CSS color, hexadecimal number, or RGB values in the range 0–1. */
  color?: string | number | [number, number, number]
  metalness?: number
  roughness?: number
  opacity?: number
  /** Defaults to true when opacity is less than 1. */
  transparent?: boolean
  emissive?: string | number | [number, number, number]
  emissiveIntensity?: number
  flatShading?: boolean
  wireframe?: boolean
}

export interface MaterialProps {
  material?: MaterialOptions
}

/** JSCAD operations often rebuild geometry and drop extra object properties. */
export function preserveMaterial<T>(source: MaterialProps, result: T): T {
  if (!source.material) return result
  if (Array.isArray(result)) {
    return result.map((shape) => preserveMaterial(source, shape)) as T
  }
  return { ...result, material: { ...source.material } }
}
