import ReactReconciler from "react-reconciler"
import React from "react"

// Define a type for the JSCAD module structure we expect
interface JSCADModule {
  primitives: {
    cube: (options: { size: number | [number, number, number] }) => any
    sphere: (options: { radius: number }) => any
  }
  booleans: {
    union: (a: any, b: any) => any
    subtract: (a: any, b: any) => any
  }
}

// Define types for JSCAD objects and operations
type JSCADPrimitive =
  | ReturnType<JSCADModule["primitives"]["cube"]>
  | ReturnType<JSCADModule["primitives"]["sphere"]>
type JSCADOperation =
  | JSCADModule["booleans"]["union"]
  | JSCADModule["booleans"]["subtract"]

// Define prop types for our components
interface CubeProps {
  size: number | [number, number, number]
}

interface SphereProps {
  radius: number
}

type Props = CubeProps | SphereProps

// Create a function that returns the host config
function createHostConfig(jscad: JSCADModule) {
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
      type: string,
      props: Props,
      rootContainerInstance: any,
      hostContext: any,
      internalInstanceHandle: any
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

    appendInitialChild(parentInstance: JSCADPrimitive, child: JSCADPrimitive) {
      return jscad.booleans.union(parentInstance, child) as JSCADPrimitive
    },

    appendChild(parentInstance: JSCADPrimitive, child: JSCADPrimitive) {
      return jscad.booleans.union(parentInstance, child) as JSCADPrimitive
    },

    removeChild(parentInstance: JSCADPrimitive, child: JSCADPrimitive) {
      return jscad.booleans.subtract(parentInstance, child) as JSCADPrimitive
    },

    appendChildToContainer(container: JSCADPrimitive[], child: JSCADPrimitive) {
      container.push(child)
    },

    removeChildFromContainer(
      container: JSCADPrimitive[],
      child: JSCADPrimitive
    ) {
      const index = container.indexOf(child)
      if (index !== -1) container.splice(index, 1)
    },

    prepareUpdate() {
      return true
    },

    commitUpdate(
      instance: JSCADPrimitive,
      updatePayload: any,
      type: string,
      oldProps: Props,
      newProps: Props
    ) {
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
    getPublicInstance(instance: JSCADPrimitive) {
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
  return hostConfig
}

// Create a function that returns the reconciler and root creation function
function createJSCADRenderer(jscad: JSCADModule) {
  const hostConfig = createHostConfig(jscad)
  const reconciler = ReactReconciler(hostConfig)

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

  return { createJSCADRoot }
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

// Export the creation function and components
export { createJSCADRenderer, Cube, Sphere, Scene }

// Usage example (commented out as it depends on the actual JSCAD module)
/*
import * as jscad from '@jscad/modeling';

const { createJSCADRoot } = createJSCADRenderer(jscad);

const container: JSCADPrimitive[] = [];
const root = createJSCADRoot(container);
root.render(<Scene />);

console.log(container);
*/
