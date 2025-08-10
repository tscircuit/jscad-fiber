import { useThree } from "../hooks/use-three"
import React from "react"
import type * as THREE from "three"

/**
 * A component that adds a THREE.Object3D to the scene.
 * This is a component-based replacement for R3F's `<primitive>` element.
 * Note: this will always attach to the root scene, not the parent object.
 */
export function Primitive({ object }: { object: THREE.Object3D }) {
  const scene = useThree((state) => state.scene)

  React.useLayoutEffect(() => {
    if (object) {
      scene.add(object)
      return () => {
        scene.remove(object)
      }
    }
  }, [scene, object])

  return null
}
