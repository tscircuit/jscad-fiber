import React from "react"
import { createJSCADRenderer, Cube, Sphere } from "../lib"
import * as jscad from "@jscad/modeling"
import * as THREE from "three"

const { createJSCADRoot } = createJSCADRenderer(jscad)

function Scene() {
  return (
    <>
      <Cube size={10} />
      <Sphere radius={5} />
    </>
  )
}

export default function JSCadShapeFixture() {
  const containerRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (containerRef.current) {
      const container: any[] = []
      const root = createJSCADRoot(container)
      root.render(<Scene />)

      // Here, you would typically use the container to render the 3D shape
      // For this example, we'll just log the result
      console.log("JSCad objects:", container)

      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      )

      const geometry = new THREE.BoxGeometry(1, 1, 1)
      const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
      const cube = new THREE.Mesh(geometry, material)
      scene.add(cube)

      camera.position.z = 5

      const renderer = new THREE.WebGLRenderer()
      renderer.setSize(window.innerWidth, window.innerHeight)

      containerRef.current.appendChild(renderer.domElement)

      renderer.render(scene, camera)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      style={{ width: "100%", height: "300px", border: "1px solid black" }}
    />
  )
}
