export type ExtrudeHelicalProps = {
  height: number
  angle: number
  startAngle?: number
  pitch?: number
  endOffset?: number
  segmetsPerRotation?: number
  children: any
}

export function ExtrudeHelical({
  height,
  angle,
  startAngle,
  pitch,
  endOffset,
  segmetsPerRotation,
  children,
}: ExtrudeHelicalProps) {
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