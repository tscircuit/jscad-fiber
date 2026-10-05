import type { MaterialProps } from "../material"
import { withColorProp } from "lib/wrappers/with-color-prop"
import { withOffsetProp } from "lib/wrappers/with-offset-prop"

export type HullChainProps = {
  children: React.ReactNode
} & MaterialProps

const HullChainBase = ({ material, children }: HullChainProps) => {
  return <hullChain material={material}>{children}</hullChain>
}

export const HullChain = withOffsetProp(withColorProp(HullChainBase))
