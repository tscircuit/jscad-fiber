export type ColorizeProps = {
  color: [number, number, number]
  children: React.ReactNode
}

export function Colorize({ color, children }: ColorizeProps) {
  return <colorize color={color}>{children}</colorize>
}