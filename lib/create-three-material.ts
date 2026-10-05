import {
  Color,
  DoubleSide,
  LineBasicMaterial,
  MeshStandardMaterial,
} from "three"
import type { MaterialOptions } from "./material"

function toColor(value: MaterialOptions["color"]): Color | undefined {
  return value === undefined
    ? undefined
    : Array.isArray(value)
      ? new Color(...value)
      : new Color(value)
}

/** Both rendering paths use the same color precedence and opacity defaults. */
export function createThreeMaterial(
  settings: MaterialOptions = {},
  options: { is2D?: boolean; wireframe?: boolean } = {},
): LineBasicMaterial | MeshStandardMaterial {
  const common = {
    vertexColors: settings.color === undefined,
    ...(settings.color !== undefined ? { color: toColor(settings.color) } : {}),
    ...(settings.opacity !== undefined ? { opacity: settings.opacity } : {}),
    transparent: settings.transparent ?? (settings.opacity ?? 1) < 1,
  }
  if (options.is2D) {
    return new LineBasicMaterial({ ...common, linewidth: 2 })
  }
  const { color, emissive, opacity, transparent, ...surface } = settings
  return new MeshStandardMaterial({
    ...surface,
    ...common,
    ...(emissive !== undefined ? { emissive: toColor(emissive) } : {}),
    ...(options.wireframe !== undefined
      ? { wireframe: options.wireframe }
      : {}),
    side: DoubleSide,
  })
}
