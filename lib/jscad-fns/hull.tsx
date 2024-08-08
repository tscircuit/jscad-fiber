import { withColorProp } from "lib/wrappers/with-color-prop"
import { withOffsetProp } from "lib/wrappers/with-offset-prop"

export type HullProps = {
  children: React.ReactNode
}

const HullBase = ({ children }: HullProps) => {
  return <hull>{children}</hull>
}

export const Hull = withOffsetProp(withColorProp(HullBase))
