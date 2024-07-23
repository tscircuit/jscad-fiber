import { Colorize } from "../jscad-fns"
import { Color } from "color"

interface ColorProps {
  color?: string
}

export function withColorProps<P extends object>(
  WrappedComponent: React.ComponentType<P>,
): React.ComponentType<P & ColorProps> {
  // Create a new component that includes the color prop
  const WithColor: React.ComponentType<P & ColorProps> = (props) => {
    const { color, ...restProps } = props
    if (!color) {
      return <WrappedComponent {...(restProps as P)} />
    }

    return (
      <Colorize color={color}>
        <WrappedComponent {...(restProps as P)} />
      </Colorize>
    )
  }

  // Set the display name for easier debugging
  WithColor.displayName = `WithColor(${
    WrappedComponent.displayName || WrappedComponent.name || "Component"
  })`

  return WithColor
}
