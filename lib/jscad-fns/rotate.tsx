import type { Point3 } from "./translate"

export type RotateProps = {
  rotation: Point3
  children: React.ReactNode
}

export function Rotate({ rotation, children }: RotateProps) {
  if (!Array.isArray(rotation)) {
    rotation = [rotation.x, rotation.y, rotation.z]
  }
  return <rotate angles={rotation}>{children}</rotate>
}
