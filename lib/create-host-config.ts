export function createHostConfig(jscad: JSCADModule) {
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
