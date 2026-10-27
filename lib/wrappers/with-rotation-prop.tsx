import { Rotate, type RotationValue } from "lib/jscad-fns/rotate"
import { isMinimalModeActive } from "../minimal-mode"

export interface RotationProps {
  rotation?: RotationValue
  minimal?: boolean
}

export function withRotationProp<P extends object>(
  WrappedComponent: React.ComponentType<P>,
): React.ComponentType<P & RotationProps> {
  const WithRotation: React.ComponentType<P & RotationProps> = (props) => {
    const { rotation, minimal, ...restProps } = props
    const forwardedProps = {
      ...restProps,
      ...(minimal !== undefined ? { minimal } : {}),
    } as unknown as P

    if (!rotation || isMinimalModeActive(minimal)) {
      return <WrappedComponent {...forwardedProps} />
    }

    return (
      <Rotate rotation={rotation}>
        <WrappedComponent {...forwardedProps} />
      </Rotate>
    )
  }

  WithRotation.displayName = `WithRotation(${
    WrappedComponent.displayName || WrappedComponent.name || "Component"
  })`

  return WithRotation
}
