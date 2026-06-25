import { withOffsetProp } from "lib/wrappers/with-offset-prop"

export type PolygonProps = {
  points: [number, number][]
}

function PolygonBase({ points }: PolygonProps) {
  return <jscadPolygon points={points} />
}

export const Polygon = withOffsetProp(PolygonBase)
