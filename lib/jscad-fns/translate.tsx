export type Point3 =
  | [number, number, number]
  | { x: number; y: number; z: number }

export const normalizePointToArray = (
  point: Point3 | undefined | null,
): number[] | null => {
  if (!point) return null
  if (Array.isArray(point)) {
    return point
  }
  return [point.x, point.y, point.z]
}

export type TranslateProps = {
  offset?: Point3
  center?: Point3
  x?: number
  y?: number
  z?: number
  children: React.ReactNode
}

export function Translate({
  offset,
  center,
  x,
  y,
  z,
  children,
}: TranslateProps) {
  const offsetNorm = normalizePointToArray(offset)
  const centerNorm = normalizePointToArray(center)

  const args: [number, number, number] = [
    offsetNorm?.[0] || centerNorm?.[0] || x || 0,
    offsetNorm?.[1] || centerNorm?.[1] || y || 0,
    offsetNorm?.[2] || centerNorm?.[2] || z || 0,
  ]

  return <translate args={args}>{children}</translate>
}
