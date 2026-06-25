import { withOffsetProp } from "lib/wrappers/with-offset-prop"

export type ProjectProps = {
  axis: [number, number, number]
  origin: [number, number, number]
  children: any
}

function ProjectBase({ axis, origin, children }: ProjectProps) {
  return (
    <project axis={axis} origin={origin}>
      {children}
    </project>
  )
}

export const Project = withOffsetProp(ProjectBase)
