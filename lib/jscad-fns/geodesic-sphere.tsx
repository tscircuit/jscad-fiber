import type { MaterialProps } from "../material"
import type { Distance } from "../utils/convert-distance"
import { withColorProp } from "lib/wrappers/with-color-prop"
import { withOffsetProp } from "lib/wrappers/with-offset-prop"
import { withRotationProp } from "lib/wrappers/with-rotation-prop"

export type GeodesicSphereProps = {
  radius: Distance
  frequency: number
  center?: [number, number, number]
  minimal?: boolean
} & MaterialProps

const GeodesicSphereBase = ({
  material,
  radius,
  frequency,
  center,
  minimal,
}: GeodesicSphereProps) => {
  return (
    <geodesicSphere
      material={material}
      radius={radius}
      frequency={frequency}
      center={center}
      minimal={minimal}
    />
  )
}

export const GeodesicSphere = withOffsetProp(
  withColorProp(withRotationProp(GeodesicSphereBase)),
)
