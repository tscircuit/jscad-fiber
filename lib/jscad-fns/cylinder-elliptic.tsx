import type { MaterialProps } from "../material"
import type { Distance } from "../utils/convert-distance"
import { withColorProp } from "lib/wrappers/with-color-prop"
import { withOffsetProp } from "lib/wrappers/with-offset-prop"
import { withRotationProp } from "lib/wrappers/with-rotation-prop"

export type CylinderEllipticProps = {
  height: Distance
  radius?: Distance
  startRadius: [Distance, Distance]
  endRadius: [Distance, Distance]
  segments?: number
  startAngle?: number
  endAngle?: number
  center?: [number, number, number]
  minimal?: boolean
} & MaterialProps

const CylinderEllipticBase = ({
  material,
  height,
  radius,
  startRadius,
  endRadius,
  segments = 32,
  startAngle = 0,
  endAngle = Math.PI * 2,
  center,
  minimal,
}: CylinderEllipticProps) => {
  return (
    <cylinderElliptic
      material={material}
      height={height}
      radius={radius}
      startRadius={startRadius}
      endRadius={endRadius}
      segments={segments}
      startAngle={startAngle}
      endAngle={endAngle}
      center={center}
      minimal={minimal}
    />
  )
}

export const CylinderElliptic = withOffsetProp(
  withColorProp(withRotationProp(CylinderEllipticBase)),
)
