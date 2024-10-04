import { Rotate, type RotationValue } from "lib/jscad-fns/rotate"

export interface RotationProps {
  rotation?: RotationValue
}

export function withRotationProp<P extends object>(
  WrappedComponent: React.ComponentType<P>,
): React.ComponentType<P & RotationProps> {
  // Create a new component that includes the color prop
  const WithRotation: React.ComponentType<P & RotationProps> = (props) => {
    const { rotation, ...restProps } = props
    if (!rotation) {
      return <WrappedComponent {...(restProps as P)} />
    }

    return (
      <Rotate rotation={rotation}>
        <WrappedComponent {...(restProps as P)} />
      </Rotate>
    )
  }

  // Set the display name for easier debugging
  WithRotation.displayName = `WithRotation(${
    WrappedComponent.displayName || WrappedComponent.name || "Component"
  })`

  return WithRotation
}
