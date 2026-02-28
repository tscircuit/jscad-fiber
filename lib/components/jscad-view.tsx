import * as jscad from "@jscad/modeling"
import React from "react"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"
import { createJSCADRenderer } from ".."
import convertCSGToThreeGeom from "../convert-csg-to-three-geom"

const { createJSCADRoot } = createJSCADRenderer(jscad as any)

function createAxisHelper(): THREE.Group {
  const group = new THREE.Group()
  const length = 1

  // X axis - Red
  const xMat = new THREE.LineBasicMaterial({ color: 0xff0000 })
  const xGeom = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(length, 0, 0),
  ])
  group.add(new THREE.Line(xGeom, xMat))

  // Y axis - Green
  const yMat = new THREE.LineBasicMaterial({ color: 0x00ff00 })
  const yGeom = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(0, length, 0),
  ])
  group.add(new THREE.Line(yGeom, yMat))

  // Z axis - Blue
  const zMat = new THREE.LineBasicMaterial({ color: 0x0000ff })
  const zGeom = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(0, 0, length),
  ])
  group.add(new THREE.Line(zGeom, zMat))

  return group
}

export function JsCadView({
  children,
  wireframe,
  zAxisUp = false,
  showGrid = false,
}: {
  children: any
  wireframe?: boolean
  zAxisUp?: boolean
  showGrid?: boolean
}) {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const sceneRef = React.useRef<THREE.Scene | null>(null)
  const gridRef = React.useRef<THREE.GridHelper | null>(null)

  React.useEffect(() => {
    if (containerRef.current) {
      const jscadGeoms: any[] = []
      const root = createJSCADRoot(jscadGeoms)
      root.render(children)

      const scene = new THREE.Scene()
      sceneRef.current = scene
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

      // Add directional lights
      const directionalLight1 = new THREE.DirectionalLight(0xffffff, 0.5)
      directionalLight1.position.set(100, 100, 100)
      scene.add(directionalLight1)

      const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.2)
      directionalLight2.position.set(0, -100, 100)
      scene.add(directionalLight2)

      const directionalLight3 = new THREE.DirectionalLight(0xffffff, 0.1)
      directionalLight3.position.set(-100, 100, 100)
      scene.add(directionalLight3)

      // Add grid
      const gridHelper = new THREE.GridHelper(100, 100)
      gridHelper.visible = showGrid
      if (zAxisUp) {
        gridHelper.rotation.x = -Math.PI / 2
      }
      scene.add(gridHelper)
      gridRef.current = gridHelper

      function processCGS(csg: any) {
        if (Array.isArray(csg)) {
          for (const child of csg) {
            processCGS(child)
          }
        } else {
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
      }

      for (const csg of jscadGeoms) {
        processCGS(csg)
      }

      camera.position.x = 20
      camera.position.y = 20
      camera.position.z = 20

      const renderer = new THREE.WebGLRenderer()
      renderer.setSize(window.innerWidth, window.innerHeight)
      renderer.autoClear = false

      containerRef.current.appendChild(renderer.domElement)

      // Add OrbitControls
      const controls = new OrbitControls(camera, renderer.domElement)
      controls.enableDamping = true
      controls.dampingFactor = 0.25
      controls.enableZoom = true

      // Axis helper overlay (bottom-right corner)
      const axisScene = new THREE.Scene()
      const axisCamera = new THREE.PerspectiveCamera(50, 1, 0.1, 10)
      axisCamera.position.set(0, 0, 3)
      axisCamera.lookAt(0, 0, 0)
      const axisHelper = createAxisHelper()
      if (zAxisUp) {
        axisHelper.rotation.x = -Math.PI / 2
      }
      axisScene.add(axisHelper)

      // Animation loop
      function animate() {
        requestAnimationFrame(animate)
        controls.update()

        // Sync axis camera orientation with main camera
        axisCamera.quaternion.copy(camera.quaternion)
        axisCamera.position.set(0, 0, 3).applyQuaternion(camera.quaternion)
        axisCamera.lookAt(0, 0, 0)

        renderer.clear()
        renderer.render(scene, camera)

        // Render axis helper in bottom-right corner
        const size = 100
        const margin = 10
        const width = renderer.domElement.width
        const height = renderer.domElement.height
        renderer.setViewport(width - size - margin, margin, size, size)
        renderer.setScissor(width - size - margin, margin, size, size)
        renderer.setScissorTest(true)
        renderer.render(axisScene, axisCamera)
        renderer.setScissorTest(false)
        renderer.setViewport(0, 0, width, height)
      }
      animate()

      // Cleanup function
      return () => {
        scene.remove(gridHelper)
        renderer.dispose()
        controls.dispose()
      }
    }
  }, [children, wireframe, zAxisUp, showGrid])

  // Update grid visibility when showGrid prop changes
  React.useEffect(() => {
    if (gridRef.current) {
      gridRef.current.visible = showGrid
    }
  }, [showGrid])

  return (
    <div ref={containerRef} style={{ width: "100%", minHeight: "400px" }} />
  )
}
