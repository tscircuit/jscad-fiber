import type { MaterialProps } from "../material"
import { withColorProp } from "lib/wrappers/with-color-prop"
import { withOffsetProp } from "lib/wrappers/with-offset-prop"

export type RoundedCylinderProps = {
  radius: number
  height: number
  roundRadius: number
} & MaterialProps

const RoundedCylinderBase = ({
  material,
  radius,
  height,
  roundRadius,
}: RoundedCylinderProps) => {
  return (
    <roundedCylinder
      material={material}
      radius={radius}
      height={height}
      roundRadius={roundRadius}
    />
  )
}

export const RoundedCylinder = withOffsetProp(
  withColorProp(RoundedCylinderBase),
)
