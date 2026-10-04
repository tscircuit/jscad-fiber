import { withMaterialProp } from "../wrappers/with-material-prop"
import { withColorProp } from "lib/wrappers/with-color-prop"
import { withOffsetProp } from "lib/wrappers/with-offset-prop"

export type RoundedCylinderProps = {
  radius: number
  height: number
  roundRadius: number
}

const RoundedCylinderBase = ({
  radius,
  height,
  roundRadius,
}: RoundedCylinderProps) => {
  return (
    <roundedCylinder
      radius={radius}
      height={height}
      roundRadius={roundRadius}
    />
  )
}

export const RoundedCylinder = withMaterialProp(
  withOffsetProp(withColorProp(RoundedCylinderBase)),
)
