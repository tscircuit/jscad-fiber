import { isMinimalModeActive } from "../minimal-mode"

export type Distance = number | string

const UNIT_TO_MM: Record<string, number> = {
  mm: 1,
  millimeter: 1,
  millimeters: 1,
  cm: 10,
  centimeter: 10,
  centimeters: 10,
  m: 1000,
  meter: 1000,
  meters: 1000,
  um: 0.001,
  µm: 0.001,
  micrometer: 0.001,
  micrometers: 0.001,
  in: 25.4,
  inch: 25.4,
  inches: 25.4,
  mil: 0.0254,
  mils: 0.0254,
  thou: 0.0254,
  ft: 304.8,
  foot: 304.8,
  feet: 304.8,
}

export function convertDistance(value: Distance): number {
  if (typeof value === "number") {
    return value
  }
  if (typeof value === "string") {
    const trimmed = value.trim()
    const match = trimmed.match(
      /^(-?(?:\d+\.?\d*|\.\d+)(?:e[+-]?\d+)?)\s*([a-zA-Zµ]+)?$/,
    )
    if (!match) {
      throw new Error(`Invalid distance value: ${value}`)
    }
    const numeric = Number.parseFloat(match[1]!)
    const unitRaw = match[2]
    if (!unitRaw) {
      return numeric
    }
    const unitKey = unitRaw === "µm" ? "µm" : unitRaw.toLowerCase()
    const multiplier = UNIT_TO_MM[unitKey]
    if (multiplier === undefined) {
      throw new Error(`Unsupported distance unit "${unitRaw}" in "${value}"`)
    }
    return numeric * multiplier
  }
  throw new Error(`Invalid distance value: ${String(value)}`)
}

export function resolveDistance(
  value: Distance,
  minimal = isMinimalModeActive(),
): number {
  if (minimal) {
    if (typeof value !== "number") {
      throw new Error(
        `String distance values are not supported in minimal mode: ${String(value)}`,
      )
    }
    return value
  }
  return convertDistance(value)
}

export function resolveOptionalDistance(
  value: Distance | undefined,
  minimal = isMinimalModeActive(),
): number | undefined {
  if (value === undefined) return undefined
  return resolveDistance(value, minimal)
}

export function resolveDistanceTuple2(
  value: [Distance, Distance],
  minimal = isMinimalModeActive(),
): [number, number] {
  return [
    resolveDistance(value[0], minimal),
    resolveDistance(value[1], minimal),
  ]
}

export function resolveDistanceTuple3(
  value: [Distance, Distance, Distance],
  minimal = isMinimalModeActive(),
): [number, number, number] {
  return [
    resolveDistance(value[0], minimal),
    resolveDistance(value[1], minimal),
    resolveDistance(value[2], minimal),
  ]
}

export function resolveSize3D(
  size: Distance | [Distance, Distance, Distance],
  minimal = isMinimalModeActive(),
): number | [number, number, number] {
  if (Array.isArray(size)) {
    return resolveDistanceTuple3(size, minimal)
  }
  return resolveDistance(size, minimal)
}
