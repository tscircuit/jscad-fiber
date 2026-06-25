import { withColorProp } from "lib/wrappers/with-color-prop"
import { withOffsetProp } from "lib/wrappers/with-offset-prop"
import type { Point3 } from "./translate"

export type RotationValue =
  | Point3
  | [string | number, string | number, string | number]
  | string
  | number

export type RotateProps = {
  rotation?: RotationValue
  angles?: RotationValue
  axis?: "x" | "y" | "z"
  angle?: string | number
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

const convertAxisAngleToRadians = (value: string | number): number => {
  if (typeof value === "number" && Math.abs(value) > Math.PI * 2) {
    return (value * Math.PI) / 180
  }
  return convertToRadians(value)
}

export const processRotation = (
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

const processAxisAngle = (
  axis: RotateProps["axis"],
  angle: RotateProps["angle"],
): [number, number, number] | null => {
  if (!axis || angle === undefined) return null

  const angleInRadians = convertAxisAngleToRadians(angle)
  if (axis === "x") return [angleInRadians, 0, 0]
  if (axis === "y") return [0, angleInRadians, 0]
  return [0, 0, angleInRadians]
}

const RotateBase = ({
  rotation,
  angles,
  axis,
  angle,
  children,
}: RotateProps) => {
  const finalRotation =
    processAxisAngle(axis, angle) ??
    (rotation ? processRotation(rotation) : processRotation(angles))

  return <rotate angles={finalRotation}>{children}</rotate>
}

export const Rotate = withOffsetProp(withColorProp(RotateBase))
