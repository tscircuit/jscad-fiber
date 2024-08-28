import { withColorProp } from "lib/wrappers/with-color-prop"
import { withOffsetProp } from "lib/wrappers/with-offset-prop"
import type { Point3 } from "./translate"

export type RotateProps = {
  rotation?:
    | Point3
    | [string | number, string | number, string | number]
    | string
    | number
  angles?:
    | Point3
    | [string | number, string | number, string | number]
    | string
    | number
  children: React.ReactNode
}

const convertToRadians = (value: string | number): number => {
  if (typeof value === "string") {
    const numericValue = value.replace(/[^\d.-]/g, "")
    const parsedValue = parseFloat(numericValue)
    if (!isNaN(parsedValue)) {
      if (value.toLowerCase().includes("deg")) {
        return (parsedValue * Math.PI) / 180
      }
      return parsedValue
    }
    throw new Error(`Invalid rotation value: ${value}`)
  }
  return value
}

const RotateBase = ({ rotation, angles, children }: RotateProps) => {
  const processRotation = (
    value: RotateProps["rotation"] | RotateProps["angles"],
  ): [number, number, number] => {
    if (typeof value === "string" || typeof value === "number") {
      const angle = convertToRadians(value)
      return [0, 0, angle]
    } else if (Array.isArray(value)) {
      return value.map(convertToRadians) as [number, number, number]
    } else if (value && typeof value === "object") {
      return [
        convertToRadians(value.x),
        convertToRadians(value.y),
        convertToRadians(value.z),
      ]
    }
    return [0, 0, 0]
  }

  const finalRotation = rotation
    ? processRotation(rotation)
    : processRotation(angles)

  return <rotate angles={finalRotation}>{children}</rotate>
}

export const Rotate = withOffsetProp(withColorProp(RotateBase))
