import { withColorProp } from "lib/wrappers/with-color-prop"
import { withOffsetProp } from "lib/wrappers/with-offset-prop"

export type TorusProps = {
  innerRadius: number
  outerRadius: number
  innerSegments?: number
  outerSegments?: number
  innerRotation?: number
  outerRotation?: number
  startAngle?: number
}

const TorusBase = ({
  innerRadius,
  outerRadius,
  innerSegments = 32,
  outerSegments = 32,
  innerRotation = 0,
  outerRotation = 1,
  startAngle = 0,
}: TorusProps) => {
  return (
    <torus
      innerRadius={innerRadius}
      outerRadius={outerRadius}
      innerSegments={innerSegments}
      outerSegments={outerSegments}
      innerRotation={innerRotation}
      outerRotation={outerRotation}
      startAngle={startAngle}
    />
  )
}

export const Torus = withOffsetProp(withColorProp(TorusBase))
