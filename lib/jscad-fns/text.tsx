import type { MaterialProps } from "../material"
import {
  buildVectorTextPolylines,
  type VectorTextAlign,
} from "../utils/hershey-simplex"
import { withColorProp } from "../wrappers/with-color-prop"
import { withOffsetProp } from "../wrappers/with-offset-prop"
import { withRotationProp } from "../wrappers/with-rotation-prop"
import { Cuboid } from "./cuboid"
import { Cylinder } from "./cylinder"
import { Rotate } from "./rotate"
import { Translate } from "./translate"
import { Union } from "./union"

export type TextProps = {
  text?: string
  children?: string | number | Array<string | number>
  fontSize?: number
  charHeight?: number
  height?: number
  extrudeHeight?: number
  strokeWidth?: number
  letterSpacing?: number
  lineSpacing?: number
  align?: VectorTextAlign
} & MaterialProps

const resolveTextContent = (
  text?: string,
  children?: string | number | Array<string | number>,
): string => {
  if (text !== undefined) return text
  if (children === undefined || children === null) return ""
  if (Array.isArray(children)) return children.map(String).join("")
  return String(children)
}

const TextBase = ({
  text,
  children,
  fontSize,
  charHeight,
  height,
  extrudeHeight,
  strokeWidth,
  letterSpacing = 1,
  lineSpacing = 1.4,
  align = "left",
  material,
}: TextProps) => {
  const content = resolveTextContent(text, children)
  if (!content || content.trim().length === 0) {
    return null
  }

  const resolvedFontSize = fontSize ?? charHeight ?? 10
  const resolvedHeight = height ?? extrudeHeight ?? 1
  const resolvedStrokeWidth = strokeWidth ?? resolvedFontSize * 0.12

  if (
    !Number.isFinite(resolvedFontSize) ||
    resolvedFontSize <= 0 ||
    !Number.isFinite(resolvedHeight) ||
    resolvedHeight <= 0 ||
    !Number.isFinite(resolvedStrokeWidth) ||
    resolvedStrokeWidth <= 0 ||
    !Number.isFinite(letterSpacing) ||
    letterSpacing <= 0 ||
    !Number.isFinite(lineSpacing) ||
    lineSpacing <= 0
  ) {
    throw new Error(
      "Text dimensions and spacing must be positive finite numbers",
    )
  }

  const polylines = buildVectorTextPolylines(content, {
    height: resolvedFontSize,
    extrudeOffset: resolvedStrokeWidth,
    letterSpacing,
    lineSpacing,
    align,
  })

  if (polylines.length === 0) {
    return null
  }

  const halfZ = resolvedHeight / 2
  const capRadius = resolvedStrokeWidth / 2
  const vertexSet = new Set<string>()
  const elements: React.ReactElement[] = []

  let elemIdx = 0

  for (const polyline of polylines) {
    if (polyline.length === 0) continue

    for (const [vx, vy] of polyline) {
      const key = `${vx.toFixed(6)},${vy.toFixed(6)}`
      if (!vertexSet.has(key)) {
        vertexSet.add(key)
        elements.push(
          <Translate key={`v-${elemIdx++}`} offset={[vx, vy, halfZ]}>
            <Cylinder radius={capRadius} height={resolvedHeight} />
          </Translate>,
        )
      }
    }

    for (let i = 0; i < polyline.length - 1; i++) {
      const [x1, y1] = polyline[i]
      const [x2, y2] = polyline[i + 1]
      const dx = x2 - x1
      const dy = y2 - y1
      const segLength = Math.hypot(dx, dy)
      if (segLength <= 1e-6) continue

      const angle = Math.atan2(dy, dx)
      const midX = (x1 + x2) / 2
      const midY = (y1 + y2) / 2

      elements.push(
        <Translate key={`s-${elemIdx++}`} offset={[midX, midY, halfZ]}>
          <Rotate angles={[0, 0, angle]}>
            <Cuboid size={[segLength, resolvedStrokeWidth, resolvedHeight]} />
          </Rotate>
        </Translate>,
      )
    }
  }

  if (elements.length === 0) {
    return null
  }

  return <Union material={material}>{elements}</Union>
}

export const Text = withColorProp(withOffsetProp(withRotationProp(TextBase)))
