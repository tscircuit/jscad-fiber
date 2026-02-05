import * as jscad from "@jscad/modeling"
import React from "react"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"
import { createJSCADRenderer } from ".."
import convertCSGToThreeGeom from "../convert-csg-to-three-geom"

const { createJSCADRoot } = createJSCADRenderer(jscad as any)

export function JsCadView({
  children,
  wireframe,
  zAxisUp = false,
  showGrid = false,
  showAxes = false,
}: {
  children: any
  wireframe?: boolean
  zAxisUp?: boolean
  showGrid?: boolean
  showAxes?: boolean
}) {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const sceneRef = React.useRef<THREE.Scene | null>(null)
  const gridRef = React.useRef<THREE.GridHelper | null>(null)
  const axesSceneRef = React.useRef<THREE.Scene | null>(null)
  const axesCameraRef = React.useRef<THREE.OrthographicCamera | null>(null)

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

      // Create axes helper scene (for corner widget)
      const axesScene = new THREE.Scene()
      axesSceneRef.current = axesScene
      const axesHelper = new THREE.AxesHelper(1)
      if (zAxisUp) {
        axesHelper.rotation.x = -Math.PI / 2
      }
      axesScene.add(axesHelper)

      // Create orthographic camera for axes
      const axesSize = 2
      const axesCamera = new THREE.OrthographicCamera(
        -axesSize,
        axesSize,
        axesSize,
        -axesSize,
        0.1,
        10,
      )
      axesCamera.position.set(0, 0, 3)
      axesCamera.lookAt(0, 0, 0)
      axesCameraRef.current = axesCamera

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

        // Render main scene
        renderer.render(scene, camera)

        // Render axes helper in bottom-right corner
        if (showAxes && axesSceneRef.current && axesCameraRef.current) {
          // Copy main camera rotation to axes camera
          axesCameraRef.current.quaternion.copy(camera.quaternion)

          // Set viewport for bottom-right corner (100x100 pixels)
          const axesViewportSize = 100
          renderer.setViewport(
            renderer.domElement.width - axesViewportSize - 10,
            10,
            axesViewportSize,
            axesViewportSize,
          )
          renderer.setScissor(
            renderer.domElement.width - axesViewportSize - 10,
            10,
            axesViewportSize,
            axesViewportSize,
          )
          renderer.setScissorTest(true)
          renderer.setClearColor(0x000000, 0)
          renderer.clear()
          renderer.render(axesSceneRef.current, axesCameraRef.current)

          // Reset viewport and scissor
          renderer.setScissorTest(false)
          renderer.setViewport(
            0,
            0,
            renderer.domElement.width,
            renderer.domElement.height,
          )
        }
      }
      animate()

      // Cleanup function
      return () => {
        scene.remove(gridHelper)
        if (axesSceneRef.current) {
          axesSceneRef.current.clear()
        }
        renderer.dispose()
        controls.dispose()
      }
    }
  }, [children, wireframe, zAxisUp, showGrid, showAxes])

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
