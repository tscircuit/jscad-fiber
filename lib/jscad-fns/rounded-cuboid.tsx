export type RoundedCuboidProps = {
  size: number | [number, number, number]
  roundRadius: number
}

export function RoundedCuboid({ size, roundRadius }: RoundedCuboidProps) {
  return <roundedCuboid size={size} roundRadius={roundRadius} />
}