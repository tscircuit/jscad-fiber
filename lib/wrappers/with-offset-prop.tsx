import { Color } from "color"
import { Colorize, Translate } from "../jscad-fns"

interface CenterProps {
  center?: { x: number; y: number; z: number } | [number, number, number]
  offset?: { x: number; y: number; z: number } | [number, number, number]
}

export function withOffsetProp<P extends object>(
  WrappedComponent: React.ComponentType<P>,
): React.ComponentType<P & CenterProps> {
  // Create a new component that includes the color prop
  const WithOffset: React.ComponentType<P & CenterProps> = (props) => {
    const { center, offset, ...restProps } = props
    if (!center && !offset) {
      return <WrappedComponent {...(restProps as P)} />
    }

    return (
      <Translate offset={center || offset}>
        <WrappedComponent {...(restProps as P)} />
      </Translate>
    )
  }

  // Set the display name for easier debugging
  WithOffset.displayName = `WithOffset(${
    WrappedComponent.displayName || WrappedComponent.name || "Component"
  })`

  return WithOffset
}
