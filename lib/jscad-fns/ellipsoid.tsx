export type EllipsoidProps = {
  radius: [number, number, number]
}

export function Ellipsoid({ radius }: EllipsoidProps) {
  return <ellipsoid radius={radius} />
}
