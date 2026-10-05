import type { MaterialProps } from "../material"
import Color from "color"

export type ColorizeProps = {
  color: [number, number, number] | string
  children: React.ReactNode
} & MaterialProps

export function Colorize({ material, color, children }: ColorizeProps) {
  if (!Array.isArray(color)) {
    color = Color(color)
      .rgb()
      .array()
      .map((v) => v / 255)
  }
  return (
    <colorize material={material} color={color}>
      {children}
    </colorize>
  )
}
