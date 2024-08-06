import { withColorProp } from "lib/wrappers/with-color-prop"
import { withOffsetProp } from "lib/wrappers/with-offset-prop"

export type CylinderProps = {
  radius: number
  height: number
}

const CylinderBase = ({ radius, height }: CylinderProps) => {
  return <cylinder radius={radius} height={height} />
}

export const Cylinder = withOffsetProp(withColorProp(CylinderBase))