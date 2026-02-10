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
}: {
  children: any
  wireframe?: boolean
  zAxisUp?: boolean
  showGrid?: boolean
}) {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const sceneRef = React.useRef<THREE.Scene | null>(null)
  const gridRef = React.useRef<THREE.GridHelper | null>(null)
  const axisHelperCanvasRef = React.useRef<HTMLCanvasElement | null>(null)

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

      containerRef.current.appendChild(renderer.domElement)

      // Add OrbitControls
      const controls = new OrbitControls(camera, renderer.domElement)
      controls.enableDamping = true
      controls.dampingFactor = 0.25
      controls.enableZoom = true

      // Create axis helper scene
      const axisScene = new THREE.Scene()
      const axisCamera = new THREE.PerspectiveCamera(50, 1, 0.1, 100)
      axisCamera.position.set(0, 0, 2)

      // Create axes helper
      const axesHelper = new THREE.AxesHelper(1)
      axisScene.add(axesHelper)

      // Add labels for X, Y, Z
      const createAxisLabel = (
        text: string,
        position: THREE.Vector3,
        color: number,
      ) => {
        const canvas = document.createElement("canvas")
        const context = canvas.getContext("2d")
        if (!context) return null

        canvas.width = 64
        canvas.height = 64
        context.font = "Bold 48px Arial"
        context.fillStyle = `#${color.toString(16).padStart(6, "0")}`
        context.textAlign = "center"
        context.textBaseline = "middle"
        context.fillText(text, 32, 32)

        const texture = new THREE.CanvasTexture(canvas)
        const spriteMaterial = new THREE.SpriteMaterial({ map: texture })
        const sprite = new THREE.Sprite(spriteMaterial)
        sprite.position.copy(position)
        sprite.scale.set(0.3, 0.3, 1)

        return sprite
      }

      const xLabel = createAxisLabel(
        "X",
        new THREE.Vector3(1.3, 0, 0),
        0xff0000,
      )
      const yLabel = createAxisLabel(
        "Y",
        new THREE.Vector3(0, 1.3, 0),
        0x00ff00,
      )
      const zLabel = createAxisLabel(
        "Z",
        new THREE.Vector3(0, 0, 1.3),
        0x0000ff,
      )

      if (xLabel) axisScene.add(xLabel)
      if (yLabel) axisScene.add(yLabel)
      if (zLabel) axisScene.add(zLabel)

      // Create axis helper canvas
      const axisCanvas = document.createElement("canvas")
      axisCanvas.style.position = "absolute"
      axisCanvas.style.bottom = "10px"
      axisCanvas.style.right = "10px"
      axisCanvas.style.width = "100px"
      axisCanvas.style.height = "100px"
      axisCanvas.style.border = "1px solid rgba(255, 255, 255, 0.3)"
      axisCanvas.style.borderRadius = "4px"
      axisCanvas.style.background = "rgba(0, 0, 0, 0.3)"
      axisCanvas.width = 200
      axisCanvas.height = 200
      containerRef.current.appendChild(axisCanvas)
      axisHelperCanvasRef.current = axisCanvas

      const axisRenderer = new THREE.WebGLRenderer({
        canvas: axisCanvas,
        alpha: true,
      })
      axisRenderer.setSize(200, 200)
      axisRenderer.setClearColor(0x000000, 0)

      // Animation loop
      function animate() {
        requestAnimationFrame(animate)
        controls.update()
        renderer.render(scene, camera)

        // Update axis helper camera to match main camera rotation
        axisCamera.position.copy(camera.position).normalize().multiplyScalar(2)
        axisCamera.lookAt(0, 0, 0)
        axisRenderer.render(axisScene, axisCamera)
      }
      animate()

      // Cleanup function
      return () => {
        scene.remove(gridHelper)
        renderer.dispose()
        controls.dispose()
        axisRenderer.dispose()
        if (axisHelperCanvasRef.current && containerRef.current) {
          containerRef.current.removeChild(axisHelperCanvasRef.current)
        }
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
    <div
      ref={containerRef}
      style={{ width: "100%", minHeight: "400px", position: "relative" }}
    />
  )
}
