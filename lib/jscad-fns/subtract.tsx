import type { MaterialProps } from "../material"
import { withColorProp } from "lib/wrappers/with-color-prop"
import { withOffsetProp } from "lib/wrappers/with-offset-prop"

export type SubtractProps = {
  children: React.ReactNode[]
} & MaterialProps

const SubtractBase = ({ material, children }: SubtractProps) => {
  if (!Array.isArray(children) || children.length < 2) {
    throw new Error("Subtract must have at least two children")
  }
  return <subtract material={material}>{children}</subtract>
}

export const Subtract = withOffsetProp(withColorProp(SubtractBase))
