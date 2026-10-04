import type { MaterialProps } from "../material"
export type UnionProps = {
  children: React.ReactNode
} & MaterialProps

export function Union({ material, children }: UnionProps) {
  return <union material={material}>{children}</union>
}
