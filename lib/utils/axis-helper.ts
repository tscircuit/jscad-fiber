import * as THREE from "three"

export interface AxisHelperConfig {
  size?: number
  position?: "bottom-right" | "bottom-left" | "top-right" | "top-left"
  width?: number
  height?: number
}

const DEFAULT_CONFIG: Required<AxisHelperConfig> = {
  size: 1,
  position: "bottom-right",
  width: 100,
  height: 100,
}

/**
 * Creates the axis helper scene with X, Y, Z arrows
 */
export function createAxisHelperScene(
  config: AxisHelperConfig = {},
): THREE.Scene {
  const { size } = { ...DEFAULT_CONFIG, ...config }
  const scene = new THREE.Scene()

  const arrowLength = 0.8 * size
  const arrowHeadLength = 0.2 * size
  const arrowHeadWidth = 0.1 * size

  const xArrow = new THREE.ArrowHelper(
    new THREE.Vector3(1, 0, 0),
    new THREE.Vector3(0, 0, 0),
    arrowLength,
    0xff0000,
    arrowHeadLength,
    arrowHeadWidth,
  )
  scene.add(xArrow)

  const yArrow = new THREE.ArrowHelper(
    new THREE.Vector3(0, 1, 0),
    new THREE.Vector3(0, 0, 0),
    arrowLength,
    0x00ff00,
    arrowHeadLength,
    arrowHeadWidth,
  )
  scene.add(yArrow)

  const zArrow = new THREE.ArrowHelper(
    new THREE.Vector3(0, 0, 1),
    new THREE.Vector3(0, 0, 0),
    arrowLength,
    0x0000ff,
    arrowHeadLength,
    arrowHeadWidth,
  )
  scene.add(zArrow)

  return scene
}

/**
 * Creates a camera for the axis helper
 */
export function createAxisHelperCamera(): THREE.OrthographicCamera {
  const camera = new THREE.OrthographicCamera(-1.5, 1.5, 1.5, -1.5, 0.1, 10)
  camera.position.set(2, 2, 2)
  camera.lookAt(0, 0, 0)
  return camera
}

/**
 * Calculates the viewport position for the axis helper
 */
export function getAxisHelperViewport(
  containerWidth: number,
  containerHeight: number,
  config: AxisHelperConfig = {},
): { x: number; y: number; width: number; height: number } {
  const { position, width, height } = { ...DEFAULT_CONFIG, ...config }
  const margin = 10

  let x: number
  let y: number

  switch (position) {
    case "bottom-left":
      x = margin
      y = margin
      break
    case "top-right":
      x = containerWidth - width - margin
      y = containerHeight - height - margin
      break
    case "top-left":
      x = margin
      y = containerHeight - height - margin
      break
    case "bottom-right":
    default:
      x = containerWidth - width - margin
      y = margin
      break
  }

  return { x, y, width, height }
}

/**
 * Syncs the axis helper camera with the main camera's rotation
 */
export function syncAxisHelperCamera(
  axesCamera: THREE.OrthographicCamera,
  mainCamera: THREE.Camera,
): void {
  axesCamera.position.copy(mainCamera.position)
  axesCamera.position.normalize()
  axesCamera.position.multiplyScalar(3)
  axesCamera.lookAt(0, 0, 0)
  axesCamera.updateMatrixWorld()
}

/**
 * Renders the axis helper in the specified viewport
 */
export function renderAxisHelper(
  renderer: THREE.WebGLRenderer,
  axesScene: THREE.Scene,
  axesCamera: THREE.OrthographicCamera,
  viewport: { x: number; y: number; width: number; height: number },
): void {
  const currentScissorTest = renderer.getScissorTest()

  renderer.setViewport(viewport.x, viewport.y, viewport.width, viewport.height)
  renderer.setScissor(viewport.x, viewport.y, viewport.width, viewport.height)
  renderer.setScissorTest(true)

  renderer.clearDepth()
  renderer.render(axesScene, axesCamera)

  renderer.setScissorTest(currentScissorTest)
}
