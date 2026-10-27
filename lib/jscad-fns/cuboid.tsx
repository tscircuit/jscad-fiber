import type { MaterialProps } from "../material"
import type { Distance } from "../utils/convert-distance"
import { withColorProp } from "../wrappers/with-color-prop"
import { withOffsetProp } from "../wrappers/with-offset-prop"
import { withRotationProp } from "../wrappers/with-rotation-prop"

export type CuboidProps = {
  size: Distance | [Distance, Distance, Distance]
  center?: [number, number, number]
  minimal?: boolean
} & MaterialProps

const CuboidBase = ({ material, size, center, minimal }: CuboidProps) => {
  return (
    <cuboid material={material} size={size} center={center} minimal={minimal} />
  )
}

export const Cuboid = withOffsetProp(
  withColorProp(withRotationProp(CuboidBase)),
)
