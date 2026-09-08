import { text as jscadText } from "@jscad/modeling"
import { withColorProp } from "lib/wrappers/with-color-prop"
import { withOffsetProp } from "lib/wrappers/with-offset-prop"
import type { ReactElement, ReactNode } from "react"
import { Cuboid } from "./cuboid"
import { Rotate } from "./rotate"
import { Translate } from "./translate"
import { Union } from "./union"

export type TextProps = {
  children?: ReactNode
  /** ASCII string to render. Used when `children` is not a string. */
  text?: string
  /** Uppercase glyph height in CAD units. Defaults to 4. */
  fontSize?: number
  /** Extrusion depth along Z. Defaults to 1. */
  height?: number
  /** Stroke width of the vector font. Defaults to fontSize / 8. */
  lineWidth?: number
  align?: "left" | "center" | "right"
  lineSpacing?: number
  letterSpacing?: number
  xOffset?: number
  yOffset?: number
}

function resolveText({ text, children }: TextProps): string {
  if (typeof text === "string") return text
  if (typeof children === "string" || typeof children === "number") {
    return String(children)
  }
  if (
    Array.isArray(children) &&
    children.length > 0 &&
    children.every(
      (child) => typeof child === "string" || typeof child === "number",
    )
  ) {
    return children.join("")
  }
  throw new Error("Text requires a string via the text prop or children")
}

function strokeSolids(
  segments: number[][][],
  lineWidth: number,
  height: number,
): ReactElement[] {
  const solids: ReactElement[] = []
  for (const segment of segments) {
    for (let i = 1; i < segment.length; i++) {
      const p0 = segment[i - 1]
      const p1 = segment[i]
      const x0 = Array.isArray(p0) ? p0[0] : (p0 as { x: number }).x
      const y0 = Array.isArray(p0) ? p0[1] : (p0 as { x: number; y: number }).y
      const x1 = Array.isArray(p1) ? p1[0] : (p1 as { x: number }).x
      const y1 = Array.isArray(p1) ? p1[1] : (p1 as { x: number; y: number }).y
      const dx = x1 - x0
      const dy = y1 - y0
      const len = Math.hypot(dx, dy)
      if (!Number.isFinite(len) || len < 1e-9) continue
      solids.push(
        <Translate
          key={`${solids.length}`}
          offset={[(x0 + x1) / 2, (y0 + y1) / 2, height / 2]}
        >
          <Rotate angles={[0, 0, Math.atan2(dy, dx)]}>
            <Cuboid size={[len + lineWidth, lineWidth, height]} />
          </Rotate>
        </Translate>,
      )
    }
  }
  return solids
}

const TextBase = (props: TextProps) => {
  const input = resolveText(props)
  if (input.length === 0) {
    throw new Error("Text requires a non-empty string")
  }

  const fontSize = props.fontSize ?? 4
  const height = props.height ?? 1
  const lineWidth = props.lineWidth ?? fontSize / 8
  const vectorOptions: {
    height: number
    align?: "left" | "center" | "right"
    lineSpacing?: number
    letterSpacing?: number
    xOffset?: number
    yOffset?: number
  } = { height: fontSize }
  if (props.align) vectorOptions.align = props.align
  if (props.lineSpacing != null) vectorOptions.lineSpacing = props.lineSpacing
  if (props.letterSpacing != null) {
    vectorOptions.letterSpacing = props.letterSpacing
  }
  if (props.xOffset != null) vectorOptions.xOffset = props.xOffset
  if (props.yOffset != null) vectorOptions.yOffset = props.yOffset

  const segments = jscadText.vectorText(vectorOptions, input) as number[][][]

  const solids = strokeSolids(segments, lineWidth, height)
  if (solids.length === 0) {
    throw new Error(`Text produced no strokes for ${JSON.stringify(input)}`)
  }
  if (solids.length === 1) return solids[0]
  return <Union>{solids}</Union>
}

export const Text = withOffsetProp(withColorProp(TextBase))
