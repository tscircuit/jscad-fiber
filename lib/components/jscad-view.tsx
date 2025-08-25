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
  const axesRendererRef = React.useRef<THREE.WebGLRenderer | null>(null)

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

      // Create separate scene and camera for axes helper
      const axesScene = new THREE.Scene()
      const axesCamera = new THREE.OrthographicCamera(-2, 2, 2, -2, 0.1, 1000)
      const axesHelper = new THREE.AxesHelper(2)
      if (zAxisUp) {
        axesHelper.rotation.x = -Math.PI / 2
      }
      axesScene.add(axesHelper)
      axesCamera.position.z = 5

      // Create axis labels
      function createAxisLabel(text: string, color: string) {
        const canvas = document.createElement("canvas")
        canvas.width = 64
        canvas.height = 64
        const context = canvas.getContext("2d")!
        context.fillStyle = color
        context.font = "bold 48px Arial"
        context.textAlign = "center"
        context.textBaseline = "middle"
        context.fillText(text, 32, 32)

        const texture = new THREE.CanvasTexture(canvas)
        const spriteMaterial = new THREE.SpriteMaterial({
          map: texture,
          sizeAttenuation: false, // This ensures consistent size regardless of position
        })
        const sprite = new THREE.Sprite(spriteMaterial)
        sprite.scale.set(0.5, 0.5, 6)
        return sprite
      }

      const xLabel = createAxisLabel("X", "#ff0000")
      const yLabel = createAxisLabel("Y", "#00ff00")
      const zLabel = createAxisLabel("Z", "#0000ff")

      // Create a group to hold both axes and labels
      const axesGroup = new THREE.Group()
      axesGroup.add(axesHelper)

      // Position labels at the end of each axis
      xLabel.position.set(1.2, 0, 0)
      if (zAxisUp) {
        yLabel.position.set(0, 0, -1.2)
        zLabel.position.set(0, 1.2, 0)
      } else {
        yLabel.position.set(0, 1.2, 0)
        zLabel.position.set(0, 0, 1.2)
      }

      axesGroup.add(xLabel)
      axesGroup.add(yLabel)
      axesGroup.add(zLabel)

      axesScene.add(axesGroup)

      // Create separate renderer for axes
      const axesRenderer = new THREE.WebGLRenderer({ alpha: true })
      axesRenderer.setSize(200, 200)
      axesRenderer.domElement.style.position = "absolute"
      axesRenderer.domElement.style.bottom = "30px"
      axesRenderer.domElement.style.right = "10px"
      containerRef.current.appendChild(axesRenderer.domElement)
      axesRendererRef.current = axesRenderer

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

      // Animation loop
      function animate() {
        requestAnimationFrame(animate)
        controls.update()

        // Update axes group rotation to match camera
        const cameraRotationMatrix = new THREE.Matrix4()
        cameraRotationMatrix.extractRotation(camera.matrix)
        axesGroup.quaternion.setFromRotationMatrix(cameraRotationMatrix)

        renderer.render(scene, camera)
        axesRenderer.render(axesScene, axesCamera)
      }
      animate()

      // Cleanup function
      return () => {
        scene.remove(gridHelper)
        renderer.dispose()
        axesRenderer.dispose()
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
