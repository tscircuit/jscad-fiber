export type TranslateProps = {
  args: [number, number, number]
  children: React.ReactNode
}

export function Translate({ args, children }: TranslateProps) {
  return <translate args={args}>{children}</translate>
}