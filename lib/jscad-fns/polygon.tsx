import { withColorProp } from "lib/wrappers/with-color-prop"

export type PolygonProps = {
  points: [number, number][]
}

const PolygonBase = ({ points }: PolygonProps) => {
  return <jscadPolygon points={points} />
}

export const Polygon = withColorProp(PolygonBase)
