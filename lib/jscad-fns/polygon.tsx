export type PolygonProps = {
  points: [number, number][]
}

export function Polygon({ points }: PolygonProps) {
  return <jscadpolygon points={points} />
}
