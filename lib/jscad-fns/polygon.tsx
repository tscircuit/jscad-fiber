import type { MaterialProps } from "../material"
export type PolygonProps = {
  points: [number, number][]
} & MaterialProps

export function Polygon({ material, points }: PolygonProps) {
  return <jscadPolygon material={material} points={points} />
}
