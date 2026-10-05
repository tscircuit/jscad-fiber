import type { MaterialProps } from "../material"
export type RectangleProps = {
  size: [number, number]
  /** Identity preserved in a headless JSCAD plan. */
  name?: string
  /** Construction rectangle: omitted from solid rendering and export. */
  reference?: boolean
} & MaterialProps

export function Rectangle({ material, size, name, reference }: RectangleProps) {
  return (
    <rectangle
      material={material}
      size={size}
      name={name}
      reference={reference}
    />
  )
}
