import * as jscad from "@jscad/modeling"
import React from "react"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"
import { Cube, Sphere, createJSCADRenderer } from "../../lib"
import convertCSGToThreeGeom from "../../lib/convert-csg-to-three-geom"
import {
  createAxisHelperCamera,
  createAxisHelperScene,
  getAxisHelperViewport,
  renderAxisHelper,
  syncAxisHelperCamera,
  type AxisHelperConfig,
} from "../../lib/utils/axis-helper"

const { createJSCADRoot } = createJSCADRenderer(jscad as any)

export function JsCadFixture({
  children,
  wireframe,
  zAxisUp = false,
  showGrid = false,
  showAxes = true,
  axesConfig,
}: {
  children: any
  wireframe?: boolean
  zAxisUp?: boolean
  showGrid?: boolean
  showAxes?: boolean
  axesConfig?: AxisHelperConfig
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

      const axesScene = showAxes ? createAxisHelperScene(axesConfig) : null
      const axesCamera = showAxes ? createAxisHelperCamera() : null
      if (axesScene && zAxisUp) {
        axesScene.rotation.x = -Math.PI / 2
      }

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

      // Animation loop
      let animationFrameId: number
      function animate() {
        animationFrameId = requestAnimationFrame(animate)
        controls.update()

        const containerWidth =
          containerRef.current?.clientWidth || window.innerWidth
        const containerHeight =
          containerRef.current?.clientHeight || window.innerHeight

        if (camera.aspect !== containerWidth / containerHeight) {
          camera.aspect = containerWidth / containerHeight
          camera.updateProjectionMatrix()
        }

        renderer.setSize(containerWidth, containerHeight)
        renderer.clear()
        renderer.setViewport(0, 0, containerWidth, containerHeight)
        renderer.setScissor(0, 0, containerWidth, containerHeight)
        renderer.setScissorTest(true)
        renderer.render(scene, camera)

        if (showAxes && axesScene && axesCamera) {
          const viewport = getAxisHelperViewport(
            containerWidth,
            containerHeight,
            axesConfig,
          )
          syncAxisHelperCamera(axesCamera, camera)
          renderAxisHelper(renderer, axesScene, axesCamera, viewport)
        }
      }
      animate()

      // Cleanup function
      return () => {
        cancelAnimationFrame(animationFrameId)
        scene.remove(gridHelper)
        renderer.dispose()
        controls.dispose()
      }
    }
  }, [children, wireframe, zAxisUp, showGrid, showAxes, axesConfig])

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
