export type RotateProps = {
  angles: [number, number, number]
  children: React.ReactNode
}

export function Rotate({ angles, children }: RotateProps) {
  return <rotate angles={angles}>{children}</rotate>
}
