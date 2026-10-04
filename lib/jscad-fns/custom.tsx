import type { MaterialProps } from "../material"
import type { Geom3 } from "@jscad/modeling/src/geometries/types"

export type CustomProps = {
  geometry: Geom3
} & MaterialProps

export function Custom({ material, geometry }: CustomProps) {
  return <custom material={material} geometry={geometry} />
}
