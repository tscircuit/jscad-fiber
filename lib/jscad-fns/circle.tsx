import { withMaterialProp } from "../wrappers/with-material-prop"
export type CircleProps = {
  radius: number
}

function CircleBase({ radius }: CircleProps) {
  return <circle radius={radius} />
}

export const Circle = withMaterialProp(CircleBase)
