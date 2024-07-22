export type UnionProps = {
  children: React.ReactNode
}

export function Union({ children }: UnionProps) {
  return <union>{children}</union>
}
