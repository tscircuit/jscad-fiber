import type { MaterialProps } from "../material"
import { withColorProp } from "lib/wrappers/with-color-prop"
import { withOffsetProp } from "lib/wrappers/with-offset-prop"
import { withRotationProp } from "lib/wrappers/with-rotation-prop"

export type HullProps = {
  children: React.ReactNode
} & MaterialProps

const HullBase = ({ material, children }: HullProps) => {
  return <hull material={material}>{children}</hull>
}

export const Hull = withOffsetProp(withColorProp(withRotationProp(HullBase)))
