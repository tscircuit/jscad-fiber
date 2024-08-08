import { withColorProp } from "lib/wrappers/with-color-prop"
import { withOffsetProp } from "lib/wrappers/with-offset-prop"

export type GeodesicSphereProps = {
  radius: number
  frequency: number
}

const GeodesicSphereBase = ({ radius, frequency }: GeodesicSphereProps) => {
  return <geodesicSphere radius={radius} frequency={frequency} />
}

export const GeodesicSphere = withOffsetProp(withColorProp(GeodesicSphereBase))