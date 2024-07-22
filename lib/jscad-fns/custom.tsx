import type { Geom3 } from "@jscad/modeling/src/geometries/types"

export type CustomProps = {
  geometry: Geom3
}

export function Custom({ geometry }: CustomProps) {
  return <custom geometry={geometry} />
}
