import type { MaterialProps } from "../material"
import { withColorProp } from "lib/wrappers/with-color-prop"
import { withOffsetProp } from "lib/wrappers/with-offset-prop"

export type ExtrudeLinearProps = {
  height: number
  twistAngle?: number
  twistSteps?: number
  /** Name the complete native profile at the signed extrusion endpoint. */
  topOutlineName?: string
  /** Name the complete native profile at the authored start (local Z=0). */
  bottomOutlineName?: string
  children: any
} & MaterialProps

const ExtrudeLinearBase = ({
  material,
  height,
  twistAngle,
  twistSteps,
  topOutlineName,
  bottomOutlineName,
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
    >
      {children}
    </extrudeLinear>
  )
}

export const ExtrudeLinear = withOffsetProp(withColorProp(ExtrudeLinearBase))
