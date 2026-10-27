import React from "react"

const minimalModeStack: boolean[] = []

export const MinimalModeContext = React.createContext<boolean>(false)

export interface MinimalModeProps {
  minimal?: boolean
}

export function isMinimalModeActive(propMinimal?: boolean): boolean {
  if (typeof propMinimal === "boolean") {
    return propMinimal
  }
  if (minimalModeStack.length > 0) {
    return minimalModeStack[minimalModeStack.length - 1]!
  }
  return false
}

export function withMinimalMode<T>(minimal: boolean, fn: () => T): T {
  minimalModeStack.push(minimal)
  try {
    return fn()
  } finally {
    minimalModeStack.pop()
  }
}

export function MinimalMode({
  minimal = true,
  children,
}: {
  minimal?: boolean
  children: React.ReactNode
}) {
  return <minimalMode minimal={minimal}>{children}</minimalMode>
}
