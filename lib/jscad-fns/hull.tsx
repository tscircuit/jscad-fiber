export type HullProps = {
  children: React.ReactNode
}

export function Hull({ children }: HullProps) {
  return <hull>{children}</hull>
}
