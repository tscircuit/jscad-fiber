import { withColorProp } from "lib/wrappers/with-color-prop"
import { withOffsetProp } from "lib/wrappers/with-offset-prop"

export type CylinderEllipticProps = {
  height: number
  radius?: number
  startRadius: [number, number]
  endRadius: [number, number]
  segments?: number
  startAngle?: number
  endAngle?: number
}

const CylinderEllipticBase = ({
  height,
  startRadius,
  endRadius,
  segments = 32,
  startAngle = 0,
  endAngle = Math.PI * 2,
}: CylinderEllipticProps) => {
  return (
    <cylinderElliptic
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
  withColorProp(CylinderEllipticBase),
)
