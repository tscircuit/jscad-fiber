import ReactReconciler from "react-reconciler"
import * as jscad from "@jscad/modeling"

// Define types for JSCAD objects and operations
type JSCADPrimitive =
  | ReturnType<typeof jscad.primitives.cube>
  | ReturnType<typeof jscad.primitives.sphere>
type JSCADOperation =
  | typeof jscad.booleans.union
  | typeof jscad.booleans.subtract

// Define prop types for our components
interface CubeProps {
  size: number | [number, number, number]
}

interface SphereProps {
  radius: number
}

type Props = CubeProps | SphereProps

// Define the host config
const hostConfig: ReactReconciler.HostConfig<
  string, // Type
  Props, // Props
  JSCADPrimitive, // Container
  JSCADPrimitive, // Instance
  never, // TextInstance
  never, // SuspenseInstance
  never, // HydratableInstance
  JSCADPrimitive, // PublicInstance
  {}, // HostContext
  boolean, // UpdatePayload
  never, // ChildSet
  number, // TimeoutHandle
  number // NoTimeout
> = {
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
        return jscad.primitives.cube({ size: (props as CubeProps).size })
      case "sphere":
        return jscad.primitives.sphere({
          radius: (props as SphereProps).radius,
        })
      default:
        throw new Error(`Unknown element type: ${type}`)
    }
  },

  createTextInstance() {
    throw new Error("Text elements are not supported in JSCAD")
  },

  appendInitialChild(parentInstance, child) {
    return jscad.booleans.union(parentInstance, child) as JSCADPrimitive
  },

  appendChild(parentInstance, child) {
    return jscad.booleans.union(parentInstance, child) as JSCADPrimitive
  },

  removeChild(parentInstance, child) {
    return jscad.booleans.subtract(parentInstance, child) as JSCADPrimitive
  },

  appendChildToContainer(container, child) {
    container.push(child)
  },

  removeChildFromContainer(container, child) {
    const index = container.indexOf(child)
    if (index !== -1) container.splice(index, 1)
  },

  prepareUpdate(instance, type, oldProps, newProps) {
    return true
  },

  commitUpdate(instance, updatePayload, type, oldProps, newProps) {
    // Re-create the instance with new props
    return this.createInstance(type, newProps, instance, {}, null)
  },

  finalizeInitialChildren() {
    return false
  },

  prepareForCommit() {
    return null
  },
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
  scheduleTimeout: setTimeout,
  cancelTimeout: clearTimeout,
  noTimeout: -1,
  isPrimaryRenderer: true,
  getCurrentEventPriority: () => 99,
  getInstanceFromNode: () => null,
  beforeActiveInstanceBlur: () => {},
  afterActiveInstanceBlur: () => {},
  prepareScopeUpdate: () => {},
  getInstanceFromScope: () => null,
  detachDeletedInstance: () => {},
}

// Create the reconciler
const reconciler = ReactReconciler(hostConfig)

// Create a JSCAD root
function createJSCADRoot(container: JSCADPrimitive[]) {
  const root = reconciler.createContainer(
    container,
    0,
    null,
    false,
    null,
    "",
    (error) => console.error(error),
    null
  )
  return {
    render(element: React.ReactElement) {
      reconciler.updateContainer(element, root, null, () => {})
    },
  }
}

// Example usage
function Cube({ size }: CubeProps) {
  return <cube size={size} />
}

function Sphere({ radius }: SphereProps) {
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
const container: JSCADPrimitive[] = []
const root = createJSCADRoot(container)
root.render(<Scene />)

// The resulting JSCAD objects will be in the container array
console.log(container)

export { createJSCADRoot, Cube, Sphere }
