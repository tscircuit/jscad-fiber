import type { MaterialProps } from "../material"
import { withColorProp } from "lib/wrappers/with-color-prop"
import { withOffsetProp } from "lib/wrappers/with-offset-prop"

export type EllipsoidProps = {
  radius: [number, number, number]
} & MaterialProps

const EllipsoidBase = ({ material, radius }: EllipsoidProps) => {
  return <ellipsoid material={material} radius={radius} />
}

export const Ellipsoid = withOffsetProp(withColorProp(EllipsoidBase))
