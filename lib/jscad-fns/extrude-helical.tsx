import type { MaterialProps } from "../material"
import type { Distance } from "../utils/convert-distance"
import { withColorProp } from "../wrappers/with-color-prop"
import { withOffsetProp } from "../wrappers/with-offset-prop"
import { withRotationProp } from "../wrappers/with-rotation-prop"

export type ExtrudeHelicalProps = {
  height: Distance
  angle: number
  startAngle?: number
  pitch?: Distance
  endOffset?: Distance
  segmetsPerRotation?: number
  minimal?: boolean
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
  minimal,
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
      minimal={minimal}
    >
      {children}
    </extrudeHelical>
  )
}

export const ExtrudeHelical = withOffsetProp(
  withColorProp(withRotationProp(ExtrudeHelicalBase)),
)
