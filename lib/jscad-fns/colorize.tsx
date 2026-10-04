import { withMaterialProp } from "../wrappers/with-material-prop"
import Color from "color"

export type ColorizeProps = {
  color: [number, number, number] | string
  children: React.ReactNode
}

function ColorizeBase({ color, children }: ColorizeProps) {
  if (!Array.isArray(color)) {
    color = Color(color)
      .rgb()
      .array()
      .map((v) => v / 255)
  }
  return <colorize color={color}>{children}</colorize>
}

export const Colorize = withMaterialProp(ColorizeBase)
