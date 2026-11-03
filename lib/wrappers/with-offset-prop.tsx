import { type Point3, Translate } from "../jscad-fns/translate"
import { isMinimalModeActive } from "../minimal-mode"
import type { Distance } from "../utils/convert-distance"

export interface CenterProps {
  center?: Point3
  offset?: Point3
  position?: Point3
  x?: Distance
  y?: Distance
  z?: Distance
  minimal?: boolean
}

export type PositionProps = CenterProps

export function withOffsetProp<P extends object>(
  WrappedComponent: React.ComponentType<P>,
): React.ComponentType<P & CenterProps> {
  const WithOffset: React.ComponentType<P & CenterProps> = (props) => {
    const { center, offset, position, x, y, z, minimal, ...restProps } = props
    const isMinimal = isMinimalModeActive(minimal)

    if (isMinimal) {
      const forwardedProps = {
        ...restProps,
        ...(minimal !== undefined ? { minimal } : {}),
        ...(center !== undefined ? { center } : {}),
      } as unknown as P
      return <WrappedComponent {...forwardedProps} />
    }

    const hasPosition =
      center !== undefined ||
      offset !== undefined ||
      position !== undefined ||
      x !== undefined ||
      y !== undefined ||
      z !== undefined

    if (!hasPosition) {
      return <WrappedComponent {...(restProps as P)} />
    }

    return (
      <Translate offset={center || offset || position} x={x} y={y} z={z}>
        <WrappedComponent {...(restProps as P)} />
      </Translate>
    )
  }

  WithOffset.displayName = `WithOffset(${
    WrappedComponent.displayName || WrappedComponent.name || "Component"
  })`

  return WithOffset
}
