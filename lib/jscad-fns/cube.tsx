import type { MaterialProps } from "../material"
import { withColorProp } from "lib/wrappers/with-color-prop"
import { withOffsetProp } from "lib/wrappers/with-offset-prop"

export interface CubeProps extends MaterialProps {
  size: number | [number, number, number]
}

const CubeBase = ({ material, size }: CubeProps) => {
  return <cube material={material} size={size} />
}

export const Cube = withOffsetProp(withColorProp(CubeBase))
