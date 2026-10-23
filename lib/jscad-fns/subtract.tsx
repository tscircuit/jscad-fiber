import type { MaterialProps } from "../material"
import { withColorProp } from "lib/wrappers/with-color-prop"
import { withOffsetProp } from "lib/wrappers/with-offset-prop"

export type SubtractProps = {
  children: React.ReactNode[]
  /** Weld and triangulate native solid joins after subtraction. */
  repair?: boolean
} & MaterialProps

const SubtractBase = ({ material, children, repair }: SubtractProps) => {
  if (!Array.isArray(children) || children.length < 2) {
    throw new Error("Subtract must have at least two children")
  }
  return (
    <subtract material={material} repair={repair}>
      {children}
    </subtract>
  )
}

export const Subtract = withOffsetProp(withColorProp(SubtractBase))
