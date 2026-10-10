import type { MaterialProps } from "../material"
import { withColorProp } from "../wrappers/with-color-prop"
import { withOffsetProp } from "../wrappers/with-offset-prop"
import { withRotationProp } from "../wrappers/with-rotation-prop"

export type ExtrudeHelicalProps = {
  height: number
  angle: number
  startAngle?: number
  pitch?: number
  endOffset?: number
  segmetsPerRotation?: number
  children: any
} & MaterialProps

const ExtrudeHelicalBase = ({
  material,
  height,
  angle,
  startAngle,
  pitch,
  endOffset,
  segmetsPerRotation,
  children,
}: ExtrudeHelicalProps) => {
  return (
    <extrudeHelical
      material={material}
      height={height}
      angle={angle}
      startAngle={startAngle}
      pitch={pitch}
      endOffset={endOffset}
      segmetsPerRotation={segmetsPerRotation}
    >
      {children}
    </extrudeHelical>
  )
}

export const ExtrudeHelical = withOffsetProp(
  withColorProp(withRotationProp(ExtrudeHelicalBase)),
)
