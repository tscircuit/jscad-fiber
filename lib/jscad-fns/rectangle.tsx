import { withColorProp } from "lib/wrappers/with-color-prop"

export type RectangleProps = {
  size: [number, number]
}

const RectangleBase = ({ size }: RectangleProps) => {
  return <rectangle size={size} />
}

export const Rectangle = withColorProp(RectangleBase)
