import * as THREE from "three"

export interface AxisHelperConfig {
  size?: number
  position?: "bottom-right" | "bottom-left" | "top-right" | "top-left"
  width?: number
  height?: number
  showLabels?: boolean
}

const DEFAULT_CONFIG: Required<AxisHelperConfig> = {
  size: 1,
  position: "bottom-right",
  width: 100,
  height: 100,
  showLabels: true,
}

/**
 * Creates the axis helper scene with X, Y, Z arrows
 */
export function createAxisHelperScene(): THREE.Scene {
  const scene = new THREE.Scene()

  // Create arrow helpers for each axis
  const arrowLength = 0.8
  const arrowHeadLength = 0.2
  const arrowHeadWidth = 0.1

  // X axis (red)
  const xDir = new THREE.Vector3(1, 0, 0)
  const xArrow = new THREE.ArrowHelper(
    xDir,
    new THREE.Vector3(0, 0, 0),
    arrowLength,
    0xff0000,
    arrowHeadLength,
    arrowHeadWidth,
  )
  scene.add(xArrow)

  // Y axis (green)
  const yDir = new THREE.Vector3(0, 1, 0)
  const yArrow = new THREE.ArrowHelper(
    yDir,
    new THREE.Vector3(0, 0, 0),
    arrowLength,
    0x00ff00,
    arrowHeadLength,
    arrowHeadWidth,
  )
  scene.add(yArrow)

  // Z axis (blue)
  const zDir = new THREE.Vector3(0, 0, 1)
  const zArrow = new THREE.ArrowHelper(
    zDir,
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

  let x: number
  let y: number

  switch (position) {
    case "bottom-left":
      x = 10
      y = 10
      break
    case "top-right":
      x = containerWidth - width - 10
      y = containerHeight - height - 10
      break
    case "top-left":
      x = 10
      y = containerHeight - height - 10
      break
    case "bottom-right":
    default:
      x = containerWidth - width - 10
      y = 10
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
  // Copy the main camera's rotation to the axes camera
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
  // Save current state
  const currentScissorTest = renderer.getScissorTest()

  // Set up viewport and scissor for the axis helper
  renderer.setViewport(viewport.x, viewport.y, viewport.width, viewport.height)
  renderer.setScissor(viewport.x, viewport.y, viewport.width, viewport.height)
  renderer.setScissorTest(true)

  // Clear only the depth buffer to overlay on top
  renderer.clearDepth()

  // Render the axis helper
  renderer.render(axesScene, axesCamera)

  // Restore scissor test state
  renderer.setScissorTest(currentScissorTest)
}

/**
 * Creates axis labels as HTML overlay elements
 */
export function createAxisLabels(
  container: HTMLElement,
  config: AxisHelperConfig = {},
): {
  labelContainer: HTMLDivElement
  labels: { x: HTMLSpanElement; y: HTMLSpanElement; z: HTMLSpanElement }
} {
  const { position, width, height } = { ...DEFAULT_CONFIG, ...config }

  const labelContainer = document.createElement("div")
  labelContainer.style.position = "absolute"
  labelContainer.style.pointerEvents = "none"
  labelContainer.style.width = `${width}px`
  labelContainer.style.height = `${height}px`

  // Position the label container
  switch (position) {
    case "bottom-left":
      labelContainer.style.left = "10px"
      labelContainer.style.bottom = "10px"
      break
    case "top-right":
      labelContainer.style.right = "10px"
      labelContainer.style.top = "10px"
      break
    case "top-left":
      labelContainer.style.left = "10px"
      labelContainer.style.top = "10px"
      break
    case "bottom-right":
    default:
      labelContainer.style.right = "10px"
      labelContainer.style.bottom = "10px"
      break
  }

  const createLabel = (text: string, color: string): HTMLSpanElement => {
    const label = document.createElement("span")
    label.textContent = text
    label.style.position = "absolute"
    label.style.color = color
    label.style.fontFamily = "Arial, sans-serif"
    label.style.fontSize = "12px"
    label.style.fontWeight = "bold"
    label.style.textShadow =
      "1px 1px 1px rgba(0,0,0,0.5), -1px -1px 1px rgba(255,255,255,0.5)"
    return label
  }

  const xLabel = createLabel("X", "#ff0000")
  const yLabel = createLabel("Y", "#00cc00")
  const zLabel = createLabel("Z", "#0000ff")

  labelContainer.appendChild(xLabel)
  labelContainer.appendChild(yLabel)
  labelContainer.appendChild(zLabel)

  container.appendChild(labelContainer)

  return {
    labelContainer,
    labels: { x: xLabel, y: yLabel, z: zLabel },
  }
}

/**
 * Updates the position of axis labels based on camera orientation
 */
export function updateAxisLabels(
  labels: { x: HTMLSpanElement; y: HTMLSpanElement; z: HTMLSpanElement },
  axesCamera: THREE.OrthographicCamera,
  viewport: { width: number; height: number },
): void {
  const labelOffset = 0.95 // Position of labels along each axis

  // Project axis endpoints to screen space
  const projectToScreen = (
    point: THREE.Vector3,
  ): { x: number; y: number; visible: boolean } => {
    const projected = point.clone().project(axesCamera)
    return {
      x: ((projected.x + 1) / 2) * viewport.width,
      y: ((1 - projected.y) / 2) * viewport.height,
      visible: projected.z < 1,
    }
  }

  const xPos = projectToScreen(new THREE.Vector3(labelOffset, 0, 0))
  const yPos = projectToScreen(new THREE.Vector3(0, labelOffset, 0))
  const zPos = projectToScreen(new THREE.Vector3(0, 0, labelOffset))

  // Update label positions
  labels.x.style.left = `${xPos.x - 6}px`
  labels.x.style.top = `${xPos.y - 8}px`
  labels.x.style.opacity = xPos.visible ? "1" : "0.3"

  labels.y.style.left = `${yPos.x - 6}px`
  labels.y.style.top = `${yPos.y - 8}px`
  labels.y.style.opacity = yPos.visible ? "1" : "0.3"

  labels.z.style.left = `${zPos.x - 6}px`
  labels.z.style.top = `${zPos.y - 8}px`
  labels.z.style.opacity = zPos.visible ? "1" : "0.3"
}
