import type { MaterialProps } from "../material"
import { withColorProp } from "lib/wrappers/with-color-prop"
import { withOffsetProp } from "lib/wrappers/with-offset-prop"

export type GeodesicSphereProps = {
  radius: number
  frequency: number
} & MaterialProps

const GeodesicSphereBase = ({
  material,
  radius,
  frequency,
}: GeodesicSphereProps) => {
  return (
    <geodesicSphere material={material} radius={radius} frequency={frequency} />
  )
}

export const GeodesicSphere = withOffsetProp(withColorProp(GeodesicSphereBase))
