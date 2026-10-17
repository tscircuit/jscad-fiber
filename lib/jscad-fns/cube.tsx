import type { MaterialProps } from "../material"
import type { Distance } from "../utils/convert-distance"
import { withColorProp } from "lib/wrappers/with-color-prop"
import { withOffsetProp } from "lib/wrappers/with-offset-prop"
import { withRotationProp } from "lib/wrappers/with-rotation-prop"

export interface CubeProps extends MaterialProps {
  size: Distance | [Distance, Distance, Distance]
  center?: [number, number, number]
  minimal?: boolean
}

const CubeBase = ({ material, size, center, minimal }: CubeProps) => {
  return (
    <cube material={material} size={size} center={center} minimal={minimal} />
  )
}

export const Cube = withOffsetProp(withColorProp(withRotationProp(CubeBase)))
