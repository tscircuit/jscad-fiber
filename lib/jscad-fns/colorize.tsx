import Color from "color"

export type JscadColor =
  | [number, number, number]
  | [number, number, number, number]

export type ColorizeProps = {
  color: JscadColor | string
  children: React.ReactNode
}

const normalizeColorInput = (color: string) => {
  const trimmedColor = color.trim()
  return /^[0-9a-f]{3,8}$/i.test(trimmedColor) ? `#${trimmedColor}` : color
}

export function Colorize({ color, children }: ColorizeProps) {
  if (!Array.isArray(color)) {
    const [red, green, blue, alpha] = Color(normalizeColorInput(color))
      .rgb()
      .array()

    color =
      alpha === undefined
        ? [red / 255, green / 255, blue / 255]
        : [red / 255, green / 255, blue / 255, alpha]
  }
  return <colorize color={color}>{children}</colorize>
}
