import { withOffsetProp } from "lib/wrappers/with-offset-prop"

export type RectangleProps = {
  size: [number, number]
}

function RectangleBase({ size }: RectangleProps) {
  return <rectangle size={size} />
}

export const Rectangle = withOffsetProp(RectangleBase)
