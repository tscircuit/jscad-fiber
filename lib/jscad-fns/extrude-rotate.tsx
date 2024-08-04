import { withColorProp } from "lib/wrappers/with-color-prop"
import { withOffsetProp } from "lib/wrappers/with-offset-prop"

export type ExtrudeRotateProps = {
  angle: number
  startAngle?: number
  segments?: number
  children: any
}

const ExtrudeRotateBase = ({
  angle,
  startAngle,
  segments,
  children,
}: ExtrudeRotateProps) => {
  return (
    <extrudeRotate angle={angle} startAngle={startAngle} segments={segments}>
      {children}
    </extrudeRotate>
  )
}

export const ExtrudeRotate = withOffsetProp(withColorProp(ExtrudeRotateBase))