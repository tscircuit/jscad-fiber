import { withColorProp } from "lib/wrappers/with-color-prop"
import { withOffsetProp } from "lib/wrappers/with-offset-prop"
import { withRotationProp } from "lib/wrappers/with-rotation-prop"

export type ExtrudeRectangularProps = {
  size: number
  height: number
  children: any
}

const ExtrudeRectangularBase = ({
  size,
  height,
  children,
}: ExtrudeRectangularProps) => {
  return (
    <extrudeRectangular size={size} height={height}>
      {children}
    </extrudeRectangular>
  )
}

export const ExtrudeRectangular = withOffsetProp(
  withColorProp(withRotationProp(ExtrudeRectangularBase)),
)
