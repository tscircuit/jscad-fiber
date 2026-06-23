import type { Geom3 } from "@jscad/modeling/src/geometries/types"
import { withColorProp } from "lib/wrappers/with-color-prop"

export type CustomProps = {
  geometry: Geom3
}

const CustomBase = ({ geometry }: CustomProps) => {
  return <custom geometry={geometry} />
}

export const Custom = withColorProp(CustomBase)
