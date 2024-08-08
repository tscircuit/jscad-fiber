import { withColorProp } from "lib/wrappers/with-color-prop"
import { withOffsetProp } from "lib/wrappers/with-offset-prop"
import type { Point3 } from "./translate"

export type RotateProps = {
  rotation?: Point3
  angles?: Point3
  children: React.ReactNode
}

const RotateBase = ({ rotation, angles, children }: RotateProps) => {
  if (rotation && !Array.isArray(rotation)) {
    rotation = [rotation.x, rotation.y, rotation.z]
  } else if (angles && !Array.isArray(angles)) {
    angles = [angles.x, angles.y, angles.z]
  }

  const finalRotation = rotation || angles

  return (
    <rotate angles={finalRotation as [number, number, number]}>
      {children}
    </rotate>
  )
}

export const Rotate = withOffsetProp(withColorProp(RotateBase))