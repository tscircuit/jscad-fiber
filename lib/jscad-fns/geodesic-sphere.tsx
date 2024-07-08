export type GeodesicSphereProps = {
  radius: number
  frequency: number
}

export function GeodesicSphere({ radius, frequency }: GeodesicSphereProps) {
  return <geodesicSphere radius={radius} frequency={frequency} />
}