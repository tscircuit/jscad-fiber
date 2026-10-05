import type { MaterialProps } from "../material"
export type CircleProps = {
  radius: number
} & MaterialProps

export function Circle({ material, radius }: CircleProps) {
  return <jscadCircle material={material} radius={radius} />
}
