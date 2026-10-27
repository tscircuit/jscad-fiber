import type { MaterialProps } from "../material"
import type { Distance } from "../utils/convert-distance"
import { withColorProp } from "lib/wrappers/with-color-prop"
import { withOffsetProp } from "lib/wrappers/with-offset-prop"
import { withRotationProp } from "lib/wrappers/with-rotation-prop"

export type RoundedCylinderProps = {
  radius: Distance
  height: Distance
  roundRadius: Distance
  center?: [number, number, number]
  minimal?: boolean
} & MaterialProps

const RoundedCylinderBase = ({
  material,
  radius,
  height,
  roundRadius,
  center,
  minimal,
}: RoundedCylinderProps) => {
  return (
    <roundedCylinder
      material={material}
      radius={radius}
      height={height}
      roundRadius={roundRadius}
      center={center}
      minimal={minimal}
    />
  )
}

export const RoundedCylinder = withOffsetProp(
  withColorProp(withRotationProp(RoundedCylinderBase)),
)
