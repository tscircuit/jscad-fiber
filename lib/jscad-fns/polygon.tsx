import { withMaterialProp } from "../wrappers/with-material-prop"
export type PolygonProps = {
  points: [number, number][]
}

function PolygonBase({ points }: PolygonProps) {
  return <jscadPolygon points={points} />
}

export const Polygon = withMaterialProp(PolygonBase)
