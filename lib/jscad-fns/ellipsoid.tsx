import { withColorProp } from "lib/wrappers/with-color-prop"
import { withOffsetProp } from "lib/wrappers/with-offset-prop"

export type EllipsoidProps = {
  radius: [number, number, number]
}

const EllipsoidBase = ({ radius }: EllipsoidProps) => {
  return <ellipsoid radius={radius} />
}

export const Ellipsoid = withOffsetProp(withColorProp(EllipsoidBase))
