import type { MaterialProps } from "../material"
import type { Distance } from "../utils/convert-distance"
import { withColorProp } from "../wrappers/with-color-prop"
import { withOffsetProp } from "../wrappers/with-offset-prop"
import { withRotationProp } from "../wrappers/with-rotation-prop"

export type RoundedCuboidProps = {
  size: Distance | [Distance, Distance, Distance]
  roundRadius: Distance
  center?: [number, number, number]
  minimal?: boolean
} & MaterialProps

const RoundedCuboidBase = ({
  material,
  size,
  roundRadius,
  center,
  minimal,
}: RoundedCuboidProps) => {
  return (
    <roundedCuboid
      material={material}
      size={size}
      roundRadius={roundRadius}
      center={center}
      minimal={minimal}
    />
  )
}

export const RoundedCuboid = withOffsetProp(
  withColorProp(withRotationProp(RoundedCuboidBase)),
)
