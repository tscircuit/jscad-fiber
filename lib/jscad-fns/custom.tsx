import { withMaterialProp } from "../wrappers/with-material-prop"
import type { Geom3 } from "@jscad/modeling/src/geometries/types"

export type CustomProps = {
  geometry: Geom3
}

function CustomBase({ geometry }: CustomProps) {
  return <custom geometry={geometry} />
}

export const Custom = withMaterialProp(CustomBase)
