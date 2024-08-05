import { withColorProp } from "../wrappers/with-color-prop"
import { withOffsetProp } from "../wrappers/with-offset-prop"

export type RoundedCuboidProps = {
  size: number | [number, number, number]
  roundRadius: number
}

const RoundedCuboidBase = ({ size, roundRadius }: RoundedCuboidProps) => {
  return <roundedCuboid size={size} roundRadius={roundRadius} />
}

export const RoundedCuboid = withOffsetProp(withColorProp(RoundedCuboidBase))