import type { MaterialProps } from "../material"
import { withColorProp } from "lib/wrappers/with-color-prop"
import { withOffsetProp } from "lib/wrappers/with-offset-prop"
import type { Point3 } from "./translate"

export type RotationValue =
  | Point3
  | [string | number, string | number, string | number]
  | string
  | number

export type RotateAxis = "x" | "y" | "z" | "-x" | "-y" | "-z"

export type RotateProps = {
  rotation?: RotationValue
  angles?: RotationValue
  axis?: RotateAxis
  angle?: string | number
  children: React.ReactNode
} & MaterialProps

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
  if (typeof value === "string" && value.toLowerCase().includes("rad")) {
    return convertToRadians(value)
  }
  const parsed = convertToRadians(value)
  if (
    !(typeof value === "string" && value.toLowerCase().includes("deg")) &&
    Math.abs(parsed) > Math.PI * 2
  ) {
    return (parsed * Math.PI) / 180
  }
  return parsed
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
  if (axis === undefined && angle === undefined) return null

  const resolvedAngle =
    angle !== undefined ? convertAxisAngleToRadians(angle) : 0

  switch (axis ?? "z") {
    case "x":
      return [resolvedAngle, 0, 0]
    case "-x":
      return [-resolvedAngle, 0, 0]
    case "y":
      return [0, resolvedAngle, 0]
    case "-y":
      return [0, -resolvedAngle, 0]
    case "z":
      return [0, 0, resolvedAngle]
    case "-z":
      return [0, 0, -resolvedAngle]
    default:
      throw new Error(`Invalid rotation axis: ${axis}`)
  }
}

const RotateBase = ({
  material,
  rotation,
  angles,
  axis,
  angle,
  children,
}: RotateProps) => {
  const finalRotation =
    processAxisAngle(axis, angle) ??
    (rotation !== undefined
      ? processRotation(rotation)
      : processRotation(angles))

  return (
    <rotate material={material} angles={finalRotation}>
      {children}
    </rotate>
  )
}

export const Rotate = withOffsetProp(withColorProp(RotateBase))
