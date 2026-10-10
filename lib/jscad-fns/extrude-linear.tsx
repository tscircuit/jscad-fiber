import type { MaterialProps } from "../material"
import { withColorProp } from "lib/wrappers/with-color-prop"
import { withOffsetProp } from "lib/wrappers/with-offset-prop"
import { withRotationProp } from "lib/wrappers/with-rotation-prop"

export type ExtrudeLinearProps = {
  height: number
  twistAngle?: number
  twistSteps?: number
  children: any
} & MaterialProps

const ExtrudeLinearBase = ({
  material,
  height,
  twistAngle,
  twistSteps,
  children,
}: ExtrudeLinearProps) => {
  return (
    <extrudeLinear
      material={material}
      height={height}
      twistAngle={twistAngle}
      twistSteps={twistSteps}
    >
      {children}
    </extrudeLinear>
  )
}

export const ExtrudeLinear = withOffsetProp(
  withColorProp(withRotationProp(ExtrudeLinearBase)),
)
