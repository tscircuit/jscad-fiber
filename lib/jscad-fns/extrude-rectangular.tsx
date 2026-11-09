import type { MaterialProps } from "../material"
import type { Distance } from "../utils/convert-distance"
import { withColorProp } from "lib/wrappers/with-color-prop"
import { withOffsetProp } from "lib/wrappers/with-offset-prop"
import { withRotationProp } from "lib/wrappers/with-rotation-prop"

export type ExtrudeRectangularProps = {
  size: Distance
  height: Distance
  minimal?: boolean
  children: any
} & MaterialProps

const ExtrudeRectangularBase = ({
  material,
  size,
  height,
  minimal,
  children,
}: ExtrudeRectangularProps) => {
  return (
    <extrudeRectangular
      material={material}
      size={size}
      height={height}
      minimal={minimal}
    >
      {children}
    </extrudeRectangular>
  )
}

export const ExtrudeRectangular = withOffsetProp(
  withColorProp(withRotationProp(ExtrudeRectangularBase)),
)
