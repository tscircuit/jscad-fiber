import type { MaterialProps } from "../material"
import type { Distance } from "../utils/convert-distance"
import { withColorProp } from "lib/wrappers/with-color-prop"
import { withOffsetProp } from "lib/wrappers/with-offset-prop"
import { withRotationProp } from "lib/wrappers/with-rotation-prop"

export type ExtrudeLinearProps = {
  height: Distance
  twistAngle?: number
  twistSteps?: number
  /** Name the complete native profile at the signed extrusion endpoint. */
  topOutlineName?: string
  /** Name the complete native profile at the authored start (local Z=0). */
  bottomOutlineName?: string
  minimal?: boolean
  children: any
} & MaterialProps

const ExtrudeLinearBase = ({
  material,
  height,
  twistAngle,
  twistSteps,
  topOutlineName,
  bottomOutlineName,
  minimal,
  children,
}: ExtrudeLinearProps) => {
  return (
    <extrudeLinear
      material={material}
      height={height}
      twistAngle={twistAngle}
      twistSteps={twistSteps}
      topOutlineName={topOutlineName}
      bottomOutlineName={bottomOutlineName}
      minimal={minimal}
    >
      {children}
    </extrudeLinear>
  )
}

export const ExtrudeLinear = withOffsetProp(
  withColorProp(withRotationProp(ExtrudeLinearBase)),
)
