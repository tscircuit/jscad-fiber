export type RectangleProps = {
  size: [number, number]
  /** Identity preserved in a headless JSCAD plan. */
  name?: string
  /** Construction rectangle: omitted from solid rendering and export. */
  reference?: boolean
}

export function Rectangle({ size, name, reference }: RectangleProps) {
  return <rectangle size={size} name={name} reference={reference} />
}
