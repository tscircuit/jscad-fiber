export type CuboidProps = {
  size: number | [number, number, number]
}

export function Cuboid({ size }: CuboidProps) {
  return <cuboid size={size} />
}
