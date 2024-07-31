export type RectangleProps = {
  size: [number, number]
}

export function Rectangle({ size }: RectangleProps) {
  return <rectangle size={size} />
}
