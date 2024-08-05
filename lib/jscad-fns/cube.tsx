import { withColorProp } from "lib/wrappers/with-color-prop"
import { withOffsetProp } from "lib/wrappers/with-offset-prop"

export interface CubeProps {
  size: number | [number, number, number]
}

const CubeBase = ({ size }: CubeProps) => {
  return <cube size={size} />
}

export const Cube = withOffsetProp(withColorProp(CubeBase))