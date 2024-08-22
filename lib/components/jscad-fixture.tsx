import * as jscad from "@jscad/modeling"
import React from "react"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"
import { Cube, Sphere, createJSCADRenderer } from "../../lib"
import convertCSGToThreeGeom from "../../lib/convert-csg-to-three-geom"

const { createJSCADRoot } = createJSCADRenderer(jscad as any)

export function JsCadFixture({
  children,
  wireframe,
  zAxisUp = false,
}: {
  children: any
  wireframe?: boolean
  zAxisUp?: boolean
}) {
  const containerRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (containerRef.current) {
      const jscadGeoms: any[] = []
      const root = createJSCADRoot(jscadGeoms)
      root.render(children)

      const scene = new THREE.Scene()
      if (zAxisUp) {
        scene.rotation.x = -Math.PI / 2
      }
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000,
      )

      // Add ambient light
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
      scene.add(ambientLight)

      // Add directional light
      const directionalLight1 = new THREE.DirectionalLight(0xffffff, 0.5)
      directionalLight1.position.set(100, 100, 100)
      scene.add(directionalLight1)

      const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.2)
      directionalLight2.position.set(0, -100, 100)
      scene.add(directionalLight2)

      const directionalLight3 = new THREE.DirectionalLight(0xffffff, 0.1)
      directionalLight3.position.set(-100, 100, 100)
      scene.add(directionalLight3)

      for (const csg of jscadGeoms) {
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
            wireframe: wireframe,
            side: THREE.DoubleSide, // Ensure both sides are visible
          })
          const mesh = new THREE.Mesh(geometry, material)
          scene.add(mesh)
        }
      }

      camera.position.x = 20
      camera.position.y = 20
      camera.position.z = 20

      const renderer = new THREE.WebGLRenderer()
      renderer.setSize(window.innerWidth, window.innerHeight)

      containerRef.current.appendChild(renderer.domElement)

      // Add OrbitControls
      const controls = new OrbitControls(camera, renderer.domElement)
      controls.enableDamping = true
      controls.dampingFactor = 0.25
      controls.enableZoom = true

      // Animation loop
      function animate() {
        requestAnimationFrame(animate)
        controls.update()
        renderer.render(scene, camera)
      }
      animate()
    }
  }, [children, wireframe, zAxisUp])

  return (
    <div ref={containerRef} style={{ width: "100%", minHeight: "400px" }} />
  )
}
