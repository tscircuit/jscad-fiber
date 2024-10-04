import { withOffsetProp } from "lib/wrappers/with-offset-prop"
import { withColorProp } from "../wrappers/with-color-prop"

export type SphereProps = {
  radius: number
  segments?: number
}

const SphereBase = ({ radius, segments }: SphereProps) => {
  return <sphere radius={radius} segments={segments || 32} />
}

export const Sphere = withColorProp(withOffsetProp(SphereBase))
