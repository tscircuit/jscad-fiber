import { withOffsetProp } from "lib/wrappers/with-offset-prop"

export type CircleProps = {
  radius: number
}

function CircleBase({ radius }: CircleProps) {
  return <circle radius={radius} />
}

export const Circle = withOffsetProp(CircleBase)
