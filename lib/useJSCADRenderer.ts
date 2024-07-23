import * as jscad from "@jscad/modeling"
import { useEffect, useMemo, useState } from "react"
import ReactReconciler from "react-reconciler"
import * as THREE from "three"
import convertCSGToThreeGeom from "./convert-csg-to-three-geom"
import { createHostConfig } from "./create-host-config"

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
    reconciler.updateContainer(children, root, null, () => {})

    const scene = new THREE.Scene()

    container.map((csg) => {
      const geometry = convertCSGToThreeGeom(csg)

      if (csg.sides) {
        // 2D shape
        const material = new THREE.LineBasicMaterial({
          vertexColors: true,
          linewidth: 2, // Note: linewidth > 1 only works in WebGL 2
        })
        const lineLoop = new THREE.LineLoop(geometry, material)
        scene.add(lineLoop)
      } else {
        // 3D shape
        const material = new THREE.MeshStandardMaterial({
          vertexColors: true,
          side: THREE.DoubleSide, // Ensure both sides are visible
        })
        const mesh = new THREE.Mesh(geometry, material)
        scene.add(mesh)
      }
    })

    setMesh(scene)
  }, [reconciler, children])

  return mesh
}
