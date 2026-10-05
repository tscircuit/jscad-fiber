import { createThreeMaterial } from "./create-three-material"
import * as jscad from "@jscad/modeling"
import { useEffect, useMemo, useState } from "react"
import ReactReconciler from "react-reconciler"
import * as THREE from "three"
import convertCSGToThreeGeom from "./convert-csg-to-three-geom"
import { createHostConfig } from "./create-host-config"
import { disposeThreeScene } from "./dispose-three-scene"

const hostConfig = createHostConfig(jscad as any)
const reconciler = ReactReconciler(hostConfig)

/**
 * React Hook that initalizes the JSCAD root to render 3D objects
 */
export function useJSCADRenderer(children) {
  const container = useMemo<any[]>(() => [], [])

  const root = useMemo(() => {
    const root = reconciler.createContainer(
      container,
      0,
      null,
      false,
      null,
      "",
      (error) => console.error(error),
      null,
    )

    return root
  }, [container])

  const [mesh, setMesh] = useState<THREE.Scene | null>(null)

  useEffect(() => {
    let active = true
    let scene: THREE.Scene | null = null
    reconciler.updateContainer(children, root, null, () => {
      if (!active) return

      const nextScene = new THREE.Scene()
      scene = nextScene

      function addGeometry(csg: any) {
        if (Array.isArray(csg)) {
          csg.forEach(addGeometry)
          return
        }
        const geometry = convertCSGToThreeGeom(csg)

        if (csg.sides) {
          // 2D shape
          const material = createThreeMaterial(csg.material, { is2D: true })
          const lineLoop = new THREE.LineLoop(geometry, material)
          nextScene.add(lineLoop)
        } else {
          // 3D shape
          const material = createThreeMaterial(csg.material)
          const mesh = new THREE.Mesh(geometry, material)
          nextScene.add(mesh)
        }
      }
      container.forEach(addGeometry)

      setMesh(nextScene)
    })
    return () => {
      active = false
      if (scene) disposeThreeScene(scene)
    }
  }, [children, root, container])

  return mesh
}
