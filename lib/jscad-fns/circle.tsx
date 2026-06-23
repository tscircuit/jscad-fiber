import { withColorProp } from "lib/wrappers/with-color-prop"

export type CircleProps = {
  radius: number
}

const CircleBase = ({ radius }: CircleProps) => {
  return <circle radius={radius} />
}

export const Circle = withColorProp(CircleBase)
