import type { MaterialProps } from "../material"
import type { Distance } from "../utils/convert-distance"
import { withColorProp } from "../wrappers/with-color-prop"
import { withOffsetProp } from "../wrappers/with-offset-prop"
import { withRotationProp } from "../wrappers/with-rotation-prop"

export type RectangleProps = {
  size: [Distance, Distance]
  /** Identity preserved in a headless JSCAD plan. */
  name?: string
  /** Construction rectangle: omitted from solid rendering and export. */
  reference?: boolean
  center?: [number, number] | [number, number, number]
  minimal?: boolean
} & MaterialProps

function RectangleBase({
  material,
  size,
  name,
  reference,
  center,
  minimal,
}: RectangleProps) {
  return (
    <rectangle
      material={material}
      size={size}
      name={name}
      reference={reference}
      center={center}
      minimal={minimal}
    />
  )
}

export const Rectangle = withOffsetProp(
  withColorProp(withRotationProp(RectangleBase)),
)
