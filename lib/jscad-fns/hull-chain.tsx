export type HullChainProps = {
  children: React.ReactNode
}

export function HullChain({
  children
}: HullChainProps) {
  return <hullChain>{children}</hullChain>
}