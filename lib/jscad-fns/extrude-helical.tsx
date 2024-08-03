import { withColorProp } from "../wrappers/with-color-prop"
import { withOffsetProp } from "../wrappers/with-offset-prop"

export type ExtrudeHelicalProps = {
  height: number
  angle: number
  startAngle?: number
  pitch?: number
  endOffset?: number
  segmetsPerRotation?: number
  children: any
}

const ExtrudeHelicalBase = ({
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

export const ExtrudeHelical = withOffsetProp(withColorProp(ExtrudeHelicalBase))
