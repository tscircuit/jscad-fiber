import { withMaterialProp } from "../wrappers/with-material-prop"
import { withColorProp } from "lib/wrappers/with-color-prop"
import { withOffsetProp } from "lib/wrappers/with-offset-prop"
import { withRotationProp } from "lib/wrappers/with-rotation-prop"

export type CylinderProps = {
  radius: number
  height: number
}

const CylinderBase = ({ radius, height }: CylinderProps) => {
  return <cylinder radius={radius} height={height} />
}

export const Cylinder = withMaterialProp(
  withColorProp(withOffsetProp(withRotationProp(CylinderBase))),
)
