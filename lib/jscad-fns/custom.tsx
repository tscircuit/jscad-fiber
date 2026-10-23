import type { MaterialProps } from "../material"
import type { NativeGeometry } from "../model-types"

export type CustomProps = { geometry: NativeGeometry } & MaterialProps

export function Custom({ material, geometry }: CustomProps) {
  return <custom material={material} geometry={geometry} />
}
