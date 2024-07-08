export type SphereProps = {
  radius: number
  segments?: number
}

export function Sphere({ radius, segments }: SphereProps) {
  return <sphere radius={radius} segments={segments || 32} />
}
