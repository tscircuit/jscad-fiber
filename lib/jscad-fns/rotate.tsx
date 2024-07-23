import type { Point3 } from "./translate"

export type RotateProps = {
  angles: Point3
  children: React.ReactNode
}

export function Rotate({ angles, children }: RotateProps) {
  return <rotate angles={angles}>{children}</rotate>
}
