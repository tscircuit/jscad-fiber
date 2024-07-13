export type ProjectProps = {
  axis: [number, number, number]
  origin: [number, number, number]
  children: any
}

export function Project({ axis, origin, children }: ProjectProps) {
  return (
    <project axis={axis} origin={origin}>
      {children}
    </project>
  )
}
