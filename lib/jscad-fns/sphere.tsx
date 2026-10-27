import type { MaterialProps } from "../material"
import type { Distance } from "../utils/convert-distance"
import { withOffsetProp } from "lib/wrappers/with-offset-prop"
import { withRotationProp } from "lib/wrappers/with-rotation-prop"
import { withColorProp } from "../wrappers/with-color-prop"

export type SphereProps = {
  radius: Distance
  segments?: number
  center?: [number, number, number]
  minimal?: boolean
} & MaterialProps

const SphereBase = ({
  material,
  radius,
  segments,
  center,
  minimal,
}: SphereProps) => {
  return (
    <jscadSphere
      material={material}
      radius={radius}
      segments={segments || 32}
      center={center}
      minimal={minimal}
    />
  )
}

export const Sphere = withColorProp(
  withOffsetProp(withRotationProp(SphereBase)),
)
