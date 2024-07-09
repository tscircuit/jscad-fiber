export type ExtrudeLinearProps = {
  height: number
  twistAngle?: number
  twistSteps?: number
  children: any
}

export function ExtrudeLinear({
  height,
  twistAngle,
  twistSteps,
  children,
}: ExtrudeLinearProps) {
  return (
    <extrudeLinear
      height={height}
      twistAngle={twistAngle}
      twistSteps={twistSteps}
    >
      {children}
    </extrudeLinear>
  )
}
