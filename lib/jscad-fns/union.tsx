import { withMaterialProp } from "../wrappers/with-material-prop"
export type UnionProps = {
  children: React.ReactNode
}

function UnionBase({ children }: UnionProps) {
  return <union>{children}</union>
}

export const Union = withMaterialProp(UnionBase)
