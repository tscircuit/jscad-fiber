import ReactReconciler from "react-reconciler"
import * as jscad from "@jscad/modeling"

// Define the host config
const hostConfig = {
  now: Date.now,
  supportsMutation: true,
  supportsPersistence: false,
  supportsHydration: false,

  createInstance(
    type,
    props,
    rootContainerInstance,
    hostContext,
    internalInstanceHandle
  ) {
    switch (type) {
      case "cube":
        return jscad.primitives.cube({ size: props.size })
      case "sphere":
        return jscad.primitives.sphere({ radius: props.radius })
      // Add more JSCAD primitives as needed
      default:
        throw new Error(`Unknown element type: ${type}`)
    }
  },

  createTextInstance() {
    throw new Error("Text elements are not supported in JSCAD")
  },

  appendInitialChild(parentInstance, child) {
    // JSCAD doesn't have a concept of appending, so we'll use union here
    return jscad.booleans.union(parentInstance, child)
  },

  appendChild(parentInstance, child) {
    return jscad.booleans.union(parentInstance, child)
  },

  removeChild(parentInstance, child) {
    // This is a simplified version. In reality, you'd need to implement a more complex logic
    return jscad.booleans.subtract(parentInstance, child)
  },

  appendChildToContainer(container, child) {
    container.push(child)
  },

  removeChildFromContainer(container, child) {
    const index = container.indexOf(child)
    if (index !== -1) container.splice(index, 1)
  },

  prepareUpdate() {
    return true
  },

  commitUpdate(instance, updatePayload, type, oldProps, newProps) {
    // Re-create the instance with new props
    return this.createInstance(type, newProps)
  },

  finalizeInitialChildren() {
    return false
  },

  prepareForCommit() {},
  resetAfterCommit() {},
  getPublicInstance(instance) {
    return instance
  },
  getRootHostContext() {
    return {}
  },
  getChildHostContext() {
    return {}
  },
  shouldSetTextContent() {
    return false
  },
  clearContainer() {},
}

// Create the reconciler
const reconciler = ReactReconciler(hostConfig)

// Create a JSCAD root
function createJSCADRoot(container) {
  const root = reconciler.createContainer(container, false, false)
  return {
    render(element) {
      reconciler.updateContainer(element, root, null, () => {})
    },
  }
}

// Example usage
function Cube({ size }) {
  return <cube size={size} />
}

function Sphere({ radius }) {
  return <sphere radius={radius} />
}

function Scene() {
  return (
    <>
      <Cube size={[10, 10, 10]} />
      <Sphere radius={5} />
    </>
  )
}

// Render the scene
const container = []
const root = createJSCADRoot(container)
root.render(<Scene />)

// The resulting JSCAD objects will be in the container array
console.log(container)

export { createJSCADRoot, Cube, Sphere }
