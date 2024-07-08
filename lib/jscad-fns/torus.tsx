export type TorusProps = {
  innerRadius: number
  outerRadius: number
  innerSegments?: number
  outerSegments?: number
  innerRotation?: number
  outerRotation?: number
  startAngle?: number
}

export function Torus({
  innerRadius,
  outerRadius,
  innerSegments = 32,
  outerSegments = 32,
  innerRotation = 0,
  outerRotation,
  startAngle = 0,
}: TorusProps) {
  return <torus
    innerRadius={innerRadius}
    outerRadius={outerRadius}
    innerSegments={innerSegments}
    outerSegments={outerSegments}
    innerRotation={innerRotation}
    outerRotation={outerRotation}
    startAngle={startAngle}
  />
}