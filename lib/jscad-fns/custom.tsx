import type { MaterialProps } from "../material"
import type { NativeGeometry } from "../model-types"

export type CustomProps = {
  geometry: NativeGeometry
  /** A stable model-local feature name collected by renderToJscadModel. */
  name?: string
  /** Construction geometry: collected by name, excluded from solid rendering. */
  reference?: boolean
} & MaterialProps

export function Custom({ material, geometry, name, reference }: CustomProps) {
  return (
    <custom
      material={material}
      geometry={geometry}
      name={name}
      reference={reference}
    />
  )
}
