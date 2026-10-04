import type { MaterialProps } from "../material"
import { withOffsetProp } from "lib/wrappers/with-offset-prop"
import { withColorProp } from "../wrappers/with-color-prop"

export type SphereProps = {
  radius: number
  segments?: number
} & MaterialProps

const SphereBase = ({ material, radius, segments }: SphereProps) => {
  return (
    <jscadSphere
      material={material}
      radius={radius}
      segments={segments || 32}
    />
  )
}

export const Sphere = withColorProp(withOffsetProp(SphereBase))
