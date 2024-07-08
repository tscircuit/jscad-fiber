export type CylinderEllipticProps = {
  height: number
  startRadius: [number, number]
  endRadius: [number, number]
  segments?: number
  startAngle?: number
  endAngle?: number
}

export function CylinderElliptic({
  height,
  startRadius,
  endRadius,
  segments = 32,
  startAngle = 0,
  endAngle = Math.PI * 2,
}: CylinderEllipticProps) {
  return (
    <cylinderElliptic
      height={height}
      startRadius={startRadius}
      endRadius={endRadius}
      segments={segments}
      startAngle={startAngle}
      endAngle={endAngle}
    />
  )
}
