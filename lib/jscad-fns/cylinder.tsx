import type { MaterialProps } from "../material"
import { withColorProp } from "lib/wrappers/with-color-prop"
import { withOffsetProp } from "lib/wrappers/with-offset-prop"
import { withRotationProp } from "lib/wrappers/with-rotation-prop"

export type CylinderProps = {
  radius: number
  height: number
} & MaterialProps

const CylinderBase = ({ material, radius, height }: CylinderProps) => {
  return <cylinder material={material} radius={radius} height={height} />
}

export const Cylinder = withColorProp(
  withOffsetProp(withRotationProp(CylinderBase)),
)
