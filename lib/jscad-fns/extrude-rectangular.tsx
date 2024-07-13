export type ExtrudeRectangularProps = {
  size: number
  height: number
  children: any
}

export function ExtrudeRectangular({
  size,
  height,
  children,
}: ExtrudeRectangularProps) {
  return (
    <extrudeRectangular
      size={size}
      height={height}
    >
      {children}
    </extrudeRectangular>
  )
}