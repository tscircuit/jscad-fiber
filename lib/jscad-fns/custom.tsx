import type { Geom3 } from "@jscad/modeling/src/geometries/types"
import { withOffsetProp } from "lib/wrappers/with-offset-prop"

export type CustomProps = {
  geometry: Geom3
}

function CustomBase({ geometry }: CustomProps) {
  return <custom geometry={geometry} />
}

export const Custom = withOffsetProp(CustomBase)
