import type { MaterialProps } from "../material"
import type { Distance } from "../utils/convert-distance"
import { withColorProp } from "../wrappers/with-color-prop"
import { withOffsetProp } from "../wrappers/with-offset-prop"
import { withRotationProp } from "../wrappers/with-rotation-prop"

export type CircleProps = {
  radius: Distance
  center?: [number, number] | [number, number, number]
  minimal?: boolean
} & MaterialProps

function CircleBase({ material, radius, center, minimal }: CircleProps) {
  return (
    <jscadCircle
      material={material}
      radius={radius}
      center={center}
      minimal={minimal}
    />
  )
}

export const Circle = withOffsetProp(
  withColorProp(withRotationProp(CircleBase)),
)
