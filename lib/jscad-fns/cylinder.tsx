import type { MaterialProps } from "../material"
import type { Distance } from "../utils/convert-distance"
import { withColorProp } from "lib/wrappers/with-color-prop"
import { withOffsetProp } from "lib/wrappers/with-offset-prop"
import { withRotationProp } from "lib/wrappers/with-rotation-prop"

export type CylinderProps = {
  radius: Distance
  height: Distance
  center?: [number, number, number]
  minimal?: boolean
} & MaterialProps

const CylinderBase = ({
  material,
  radius,
  height,
  center,
  minimal,
}: CylinderProps) => {
  return (
    <cylinder
      material={material}
      radius={radius}
      height={height}
      center={center}
      minimal={minimal}
    />
  )
}

export const Cylinder = withColorProp(
  withOffsetProp(withRotationProp(CylinderBase)),
)
