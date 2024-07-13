export type ExtrudeRotateProps = {
  angle: number
  startAngle?: number
  segments?: number
  children: any
}

export function ExtrudeRotate({
  angle,
  startAngle,
  segments,
  children,
}: ExtrudeRotateProps) {
  return (
    <extrudeRotate angle={angle} startAngle={startAngle} segments={segments}>
      {children}
    </extrudeRotate>
  )
}
