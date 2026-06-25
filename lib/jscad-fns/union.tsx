import { withOffsetProp } from "lib/wrappers/with-offset-prop"

export type UnionProps = {
  children: React.ReactNode
}

function UnionBase({ children }: UnionProps) {
  return <union>{children}</union>
}

export const Union = withOffsetProp(UnionBase)
