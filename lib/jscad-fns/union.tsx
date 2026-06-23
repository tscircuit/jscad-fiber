import { withColorProp } from "lib/wrappers/with-color-prop"

export type UnionProps = {
  children: React.ReactNode
}

const UnionBase = ({ children }: UnionProps) => {
  return <union>{children}</union>
}

export const Union = withColorProp(UnionBase)
