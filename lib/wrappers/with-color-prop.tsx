import { Colorize } from "../jscad-fns/colorize"
import { isMinimalModeActive } from "../minimal-mode"

export interface ColorProps {
  color?: string
  minimal?: boolean
}

export function withColorProp<P extends object>(
  WrappedComponent: React.ComponentType<P>,
): React.ComponentType<P & ColorProps> {
  const WithColor: React.ComponentType<P & ColorProps> = (props) => {
    const { color, minimal, ...restProps } = props
    const forwardedProps = {
      ...restProps,
      ...(minimal !== undefined ? { minimal } : {}),
    } as unknown as P

    if (!color || isMinimalModeActive(minimal)) {
      return <WrappedComponent {...forwardedProps} />
    }

    return (
      <Colorize color={color}>
        <WrappedComponent {...forwardedProps} />
      </Colorize>
    )
  }

  WithColor.displayName = `WithColor(${
    WrappedComponent.displayName || WrappedComponent.name || "Component"
  })`

  return WithColor
}
