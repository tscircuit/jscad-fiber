export type RoundedCylinderProps = {
  radius: number
  height: number
  roundRadius: number
}

export function RoundedCylinder({
  radius,
  height,
  roundRadius,
}: RoundedCylinderProps) {
  return (
    <roundedCylinder
      radius={radius}
      height={height}
      roundRadius={roundRadius}
    />
  )
}
