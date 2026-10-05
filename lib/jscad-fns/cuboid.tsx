import type { MaterialProps } from "../material"
import { withColorProp } from "../wrappers/with-color-prop"
import { withOffsetProp } from "../wrappers/with-offset-prop"

export type CuboidProps = {
  size: number | [number, number, number]
} & MaterialProps

const CuboidBase = ({ material, size }: CuboidProps) => {
  return <cuboid material={material} size={size} />
}

export const Cuboid = withOffsetProp(withColorProp(CuboidBase))
