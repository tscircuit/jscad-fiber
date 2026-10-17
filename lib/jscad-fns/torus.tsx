import type { MaterialProps } from "../material"
import type { Distance } from "../utils/convert-distance"
import { withColorProp } from "lib/wrappers/with-color-prop"
import { withOffsetProp } from "lib/wrappers/with-offset-prop"
import { withRotationProp } from "lib/wrappers/with-rotation-prop"

export type TorusProps = {
  innerRadius: Distance
  outerRadius: Distance
  innerSegments?: number
  outerSegments?: number
  innerRotation?: number
  outerRotation?: number
  startAngle?: number
  center?: [number, number, number]
  minimal?: boolean
} & MaterialProps

const TorusBase = ({
  material,
  innerRadius,
  outerRadius,
  innerSegments = 32,
  outerSegments = 32,
  innerRotation = 0,
  outerRotation = 1,
  startAngle = 0,
  center,
  minimal,
}: TorusProps) => {
  return (
    <torus
      material={material}
      innerRadius={innerRadius}
      outerRadius={outerRadius}
      innerSegments={innerSegments}
      outerSegments={outerSegments}
      innerRotation={innerRotation}
      outerRotation={outerRotation}
      startAngle={startAngle}
      center={center}
      minimal={minimal}
    />
  )
}

export const Torus = withOffsetProp(withColorProp(withRotationProp(TorusBase)))
