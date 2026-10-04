import type React from "react"
import type { MaterialProps } from "../material"

export function withMaterialProp<P extends object>(
  WrappedComponent: React.ComponentType<P>,
): React.ComponentType<P & MaterialProps> {
  const WithMaterial = ({ material, ...props }: P & MaterialProps) => {
    const element = <WrappedComponent {...(props as P)} />
    return material ? (
      <jscadMaterial material={material}>{element}</jscadMaterial>
    ) : (
      element
    )
  }
  WithMaterial.displayName = `WithMaterial(${WrappedComponent.displayName || WrappedComponent.name || "Component"})`
  return WithMaterial
}
