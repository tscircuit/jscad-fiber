import { withMaterialProp } from "../wrappers/with-material-prop"
import { withColorProp } from "lib/wrappers/with-color-prop"
import { withOffsetProp } from "lib/wrappers/with-offset-prop"

export type HullChainProps = {
  children: React.ReactNode
}

const HullChainBase = ({ children }: HullChainProps) => {
  return <hullChain>{children}</hullChain>
}

export const HullChain = withMaterialProp(
  withOffsetProp(withColorProp(HullChainBase)),
)
