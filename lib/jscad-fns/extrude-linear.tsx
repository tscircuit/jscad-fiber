import { withColorProp } from "lib/wrappers/with-color-prop"
import { withOffsetProp } from "lib/wrappers/with-offset-prop"

export type ExtrudeLinearProps = {
  height: number
  twistAngle?: number
  twistSteps?: number
  children: any
}

const ExtrudeLinearBase = ({
  height,
  twistAngle,
  twistSteps,
  children,
}: ExtrudeLinearProps) => {
  return <extrudeLinear height={height} twistAngle={twistAngle} twistSteps={twistSteps}>{children}</extrudeLinear>
}

export const ExtrudeLinear = withOffsetProp(withColorProp(ExtrudeLinearBase))