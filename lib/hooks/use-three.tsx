import React, { useContext } from "react"
import type * as THREE from "three"

export interface ThreeState {
  scene: THREE.Scene
  camera: THREE.Camera
  renderer: THREE.WebGLRenderer
}

const ThreeContext = React.createContext<ThreeState | null>(null)

export function useThree<T>(selector: (state: ThreeState) => T): T {
  const state = useContext(ThreeContext)
  if (!state)
    throw new Error("useThree must be used within a Canvas component.")
  return selector(state)
}

export const ThreeProvider = ThreeContext.Provider
