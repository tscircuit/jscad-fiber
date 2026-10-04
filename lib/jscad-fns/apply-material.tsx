import type { MaterialOptions } from "../material"

export interface ApplyMaterialProps {
  material: MaterialOptions
  children: React.ReactNode
}

export function ApplyMaterial({ material, children }: ApplyMaterialProps) {
  return <applyMaterial material={material}>{children}</applyMaterial>
}
