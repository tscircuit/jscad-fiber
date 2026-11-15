import type { MaterialProps } from "../material"
import { withColorProp } from "lib/wrappers/with-color-prop"
import { withOffsetProp } from "lib/wrappers/with-offset-prop"
import { withRotationProp } from "lib/wrappers/with-rotation-prop"

export type CylinderEllipticProps = {
  height: number
  radius?: number
  startRadius: [number, number]
  endRadius: [number, number]
  segments?: number
  startAngle?: number
  endAngle?: number
} & MaterialProps

const CylinderEllipticBase = ({
  material,
  height,
  startRadius,
  endRadius,
  segments = 32,
  startAngle = 0,
  endAngle = Math.PI * 2,
}: CylinderEllipticProps) => {
  return (
    <cylinderElliptic
      material={material}
      height={height}
      startRadius={startRadius}
      endRadius={endRadius}
      segments={segments}
      startAngle={startAngle}
      endAngle={endAngle}
    />
  )
}

export const CylinderElliptic = withOffsetProp(
  withColorProp(withRotationProp(CylinderEllipticBase)),
)
