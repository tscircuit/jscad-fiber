import { withColorProp } from "lib/wrappers/with-color-prop"
import { withOffsetProp } from "lib/wrappers/with-offset-prop"
import { withRotationProp } from "lib/wrappers/with-rotation-prop"

export type HullChainProps = {
  children: React.ReactNode
}

const HullChainBase = ({ children }: HullChainProps) => {
  return <hullChain>{children}</hullChain>
}

export const HullChain = withOffsetProp(
  withColorProp(withRotationProp(HullChainBase)),
)
