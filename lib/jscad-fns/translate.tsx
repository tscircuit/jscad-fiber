import type { MaterialProps } from "../material"
import { isMinimalModeActive } from "../minimal-mode"
import { type Distance, resolveDistance } from "../utils/convert-distance"

export type Point3 =
  | [Distance, Distance, Distance]
  | { x: Distance; y: Distance; z: Distance }

export const normalizePointToArray = (
  point: Point3 | undefined | null,
  minimal = isMinimalModeActive(),
): [number, number, number] | null => {
  if (!point) return null
  if (Array.isArray(point)) {
    return [
      resolveDistance(point[0], minimal),
      resolveDistance(point[1], minimal),
      resolveDistance(point[2], minimal),
    ]
  }
  return [
    resolveDistance(point.x, minimal),
    resolveDistance(point.y, minimal),
    resolveDistance(point.z, minimal),
  ]
}

export type TranslateProps = {
  offset?: Point3
  center?: Point3
  position?: Point3
  x?: Distance
  y?: Distance
  z?: Distance
  children: React.ReactNode
} & MaterialProps

export function Translate({
  material,
  offset,
  center,
  position,
  x,
  y,
  z,
  children,
}: TranslateProps) {
  const minimal = isMinimalModeActive()
  const offsetNorm = normalizePointToArray(offset, minimal)
  const centerNorm = normalizePointToArray(center, minimal)
  const positionNorm = normalizePointToArray(position, minimal)

  const resolvedX = x !== undefined ? resolveDistance(x, minimal) : undefined
  const resolvedY = y !== undefined ? resolveDistance(y, minimal) : undefined
  const resolvedZ = z !== undefined ? resolveDistance(z, minimal) : undefined

  const args: [number, number, number] = [
    offsetNorm?.[0] ?? centerNorm?.[0] ?? positionNorm?.[0] ?? resolvedX ?? 0,
    offsetNorm?.[1] ?? centerNorm?.[1] ?? positionNorm?.[1] ?? resolvedY ?? 0,
    offsetNorm?.[2] ?? centerNorm?.[2] ?? positionNorm?.[2] ?? resolvedZ ?? 0,
  ]

  return (
    <translate material={material} args={args}>
      {children}
    </translate>
  )
}
