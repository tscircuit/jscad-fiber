import type { MaterialOptions } from "../material"

export interface MaterialComponentProps extends MaterialOptions {
  children: React.ReactNode
}

export function Material({ children, ...material }: MaterialComponentProps) {
  return <applyMaterial material={material}>{children}</applyMaterial>
}
