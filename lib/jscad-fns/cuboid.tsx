import { withColorProp } from "../wrappers/with-color-prop"
import { withOffsetProp } from "../wrappers/with-offset-prop"
import { withRotationProp } from "../wrappers/with-rotation-prop"

export type CuboidProps = {
  size: number | [number, number, number]
}

const CuboidBase = ({ size }: CuboidProps) => {
  return <cuboid size={size} />
}

export const Cuboid = withOffsetProp(
  withColorProp(withRotationProp(CuboidBase)),
)
