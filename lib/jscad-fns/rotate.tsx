import type { Point3 } from "./translate"

export type RotateProps = {
  angle: Point3
  children: React.ReactNode
}

export function Rotate({
  angle,
  children,
}: RotateProps) {
  return <rotate angle={angle}>{children}</rotate>
}