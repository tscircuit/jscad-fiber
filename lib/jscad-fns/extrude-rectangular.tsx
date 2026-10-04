import type { MaterialProps } from "../material"
import { withColorProp } from "lib/wrappers/with-color-prop"
import { withOffsetProp } from "lib/wrappers/with-offset-prop"

export type ExtrudeRectangularProps = {
  size: number
  height: number
  children: any
} & MaterialProps

const ExtrudeRectangularBase = ({
  material,
  size,
  height,
  children,
}: ExtrudeRectangularProps) => {
  return (
    <extrudeRectangular material={material} size={size} height={height}>
      {children}
    </extrudeRectangular>
  )
}

export const ExtrudeRectangular = withOffsetProp(
  withColorProp(ExtrudeRectangularBase),
)
