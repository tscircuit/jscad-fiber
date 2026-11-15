import type { MaterialProps } from "../material"
import { withColorProp } from "lib/wrappers/with-color-prop"
import { withOffsetProp } from "lib/wrappers/with-offset-prop"
import { withRotationProp } from "lib/wrappers/with-rotation-prop"

export type ExtrudeRotateProps = {
  angle: number
  startAngle?: number
  segments?: number
  children: any
} & MaterialProps

const ExtrudeRotateBase = ({
  material,
  angle,
  startAngle,
  segments,
  children,
}: ExtrudeRotateProps) => {
  return (
    <extrudeRotate
      material={material}
      angle={angle}
      startAngle={startAngle}
      segments={segments}
    >
      {children}
    </extrudeRotate>
  )
}

export const ExtrudeRotate = withOffsetProp(
  withColorProp(withRotationProp(ExtrudeRotateBase)),
)
