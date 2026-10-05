import type { MaterialProps } from "../material"
export type ProjectProps = {
  axis: [number, number, number]
  origin: [number, number, number]
  children: any
} & MaterialProps

export function Project({ material, axis, origin, children }: ProjectProps) {
  return (
    <project material={material} axis={axis} origin={origin}>
      {children}
    </project>
  )
}
