import type { MaterialProps } from "../material"
import type { Distance } from "../utils/convert-distance"
import { withColorProp } from "lib/wrappers/with-color-prop"
import { withOffsetProp } from "lib/wrappers/with-offset-prop"
import { withRotationProp } from "lib/wrappers/with-rotation-prop"

export type EllipsoidProps = {
  radius: [Distance, Distance, Distance]
  center?: [number, number, number]
  minimal?: boolean
} & MaterialProps

const EllipsoidBase = ({
  material,
  radius,
  center,
  minimal,
}: EllipsoidProps) => {
  return (
    <ellipsoid
      material={material}
      radius={radius}
      center={center}
      minimal={minimal}
    />
  )
}

export const Ellipsoid = withOffsetProp(
  withColorProp(withRotationProp(EllipsoidBase)),
)
