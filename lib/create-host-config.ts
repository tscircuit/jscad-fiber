import type ReactReconciler from "react-reconciler"
import type {
  CuboidProps,
  CylinderEllipticProps,
  CylinderProps,
  EllipsoidProps,
  GeodesicSphereProps,
  RoundedCuboidProps,
  RoundedCylinderProps,
  SphereProps,
  TorusProps,
  PolygonProps,
  ExtrudeLinearProps,
  ExtrudeHelicalProps,
  ExtrudeRotateProps,
  ExtrudeRectangularProps,
  ProjectProps,
} from "./jscad-fns"
import type { JSCADModule, JSCADPrimitive } from "./jscad-primitives"

const ex = {
  sides: [
    [
      [-2, 2],
      [-2, -1],
    ],
    [
      [-2, -1],
      [2, -1],
    ],
    [
      [2, -1],
      [2.5, 2],
    ],
    [
      [2.5, 2],
      [1, 1],
    ],
    [
      [1, 1],
      [0, 2],
    ],
    [
      [0, 2],
      [-1, 1],
    ],
    [
      [-1, 1],
      [-2, 2],
    ],
  ],
  transforms: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
}

export function createHostConfig(jscad: JSCADModule) {
  const createInstance = (
    type: string | Function,
    props: any,
    rootContainerInstance: any,
    hostContext: any,
    internalInstanceHandle: any,
  ) => {
    const renderChildren = (children: any) => {
      if (Array.isArray(children)) {
        // TODO union all children together
        throw new Error("Unioning multiple children is not yet supported")
      }
      if (children) {
        // Single child
        return createInstance(
          children.type,
          children.props,
          [],
          hostContext,
          internalInstanceHandle,
        )
      }
      return null
    }

    if (typeof type === "function") {
      const element = type(props)
      return createInstance(
        element.type,
        element.props,
        rootContainerInstance,
        hostContext,
        internalInstanceHandle,
      )
    }

    switch (type) {
      case "cube":
        return jscad.primitives.cube({ size: (props as CubeProps).size })
      case "sphere":
        return jscad.primitives.sphere({
          radius: (props as SphereProps).radius,
          segments: (props as SphereProps).segments,
        })
      case "cuboid":
        return jscad.primitives.cuboid({
          size: (props as CuboidProps).size,
        })
      case "roundedCuboid":
        return jscad.primitives.roundedCuboid({
          size: (props as RoundedCuboidProps).size,
          roundRadius: (props as RoundedCuboidProps).roundRadius,
        })
      case "geodesicSphere":
        return jscad.primitives.geodesicSphere({
          radius: (props as GeodesicSphereProps).radius,
          frequency: (props as GeodesicSphereProps).frequency,
        })
      case "ellipsoid":
        return jscad.primitives.ellipsoid({
          radius: (props as EllipsoidProps).radius,
        })
      case "cylinder":
        return jscad.primitives.cylinder({
          radius: (props as CylinderProps).radius,
          height: (props as CylinderProps).height,
          startRadius: (props as CylinderProps).startRadius,
          endRadius: (props as CylinderProps).endRadius,
        })
      case "roundedCylinder":
        return jscad.primitives.roundedCylinder({
          radius: (props as RoundedCylinderProps).radius,
          height: (props as RoundedCylinderProps).height,
          roundRadius: (props as RoundedCylinderProps).roundRadius,
        })
      case "cylinderElliptic":
        return jscad.primitives.cylinderElliptic({
          radius: (props as CylinderEllipticProps).radius,
          height: (props as CylinderEllipticProps).height,
          startRadius: (props as CylinderEllipticProps).startRadius,
          endRadius: (props as CylinderEllipticProps).endRadius,
          startAngle: (props as CylinderEllipticProps).startAngle,
          endAngle: (props as CylinderEllipticProps).endAngle,
        })
      case "torus":
        return jscad.primitives.torus({
          radius: (props as TorusProps).radius,
          tube: (props as TorusProps).tube,
        })
      case "jscadPolygon":
        return jscad.primitives.polygon({
          points: (props as PolygonProps).points,
        })
      // biome-ignore lint/suspicious/noFallthroughSwitchClause: <explanation>
      case "extrudeLinear": {
        const { children, ...extrudeProps } = props as ExtrudeLinearProps

        const childrenGeometry = renderChildren(children)

        const extrudedGeometry = jscad.extrusions.extrudeLinear(
          {
            height: extrudeProps.height,
            // twistAngle: extrudeProps.twistAngle,
            // twistSteps: extrudeProps.twistSteps,
          },
          childrenGeometry,
        )

        return extrudedGeometry
      }
      case "extrudeHelical": {
        const { children, ...extrudeProps } = props as ExtrudeHelicalProps

        const childrenGeometry = renderChildren(children)

        const extrudedGeometry = jscad.extrusions.extrudeHelical(
          {

            angle: extrudeProps.angle,
            pitch: extrudeProps.pitch,
            segmetsPerRotation: extrudeProps.segmetsPerRotation,
            // startAngle: extrudeProps.startAngle,
            // height: extrudeProps.height,
            // endOffset: extrudeProps.endOffset,
          },
          childrenGeometry,
        )

        return extrudedGeometry
      }
      case "extrudeRotate": {
        const { children, ...extrudeProps } = props as ExtrudeRotateProps

        const childrenGeometry = renderChildren(children)

        const extrudedGeometry = jscad.extrusions.extrudeRotate(
          {
            angle: extrudeProps.angle,
            segments: extrudeProps.segments,
          },
          childrenGeometry,
        )

        return extrudedGeometry
      }
      case "extrudeRectangular": {
        const { children, ...extrudeProps } = props as ExtrudeRectangularProps

        const childrenGeometry = renderChildren(children)

        const extrudedGeometry = jscad.extrusions.extrudeRectangular(
          {
            size: extrudeProps.size,
            height: extrudeProps.height,
          },
          childrenGeometry,
        )

        return extrudedGeometry
      }
      case "project": {
        const { children, ...projectProps } = props as ProjectProps

        const childrenGeometry = renderChildren(children)

        const projectedGeometry = jscad.extrusions.project(
          {
            axis: projectProps.axis,
            origin: projectProps.origin,
          },
          childrenGeometry,
        )

        return projectedGeometry
      }

      default:
        throw new Error(`Unknown element type: ${type}`)
    }
  }

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

    createInstance: createInstance,

    createTextInstance() {
      throw new Error("Text elements are not supported in JSCAD")
    },

    appendInitialChild(parentInstance: JSCADPrimitive, child: JSCADPrimitive) {
      return parentInstance
    },

    appendChild(parentInstance: JSCADPrimitive, child: JSCADPrimitive) {
      return parentInstance
    },

    removeChild(parentInstance: JSCADPrimitive, child: JSCADPrimitive) {
      return parentInstance
    },

    appendChildToContainer(container: JSCADPrimitive[], child: JSCADPrimitive) {
      container.push(child)
    },

    removeChildFromContainer(
      container: JSCADPrimitive[],
      child: JSCADPrimitive,
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
      newProps: Props,
    ) {
      // Re-create the instance with new props
      return createInstance(type, newProps, instance, {}, null)
    },

    finalizeInitialChildren() {
      return false
    },

    prepareForCommit() {
      return null
    },
    resetAfterCommit() { },
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
    clearContainer() { },
    scheduleTimeout: setTimeout,
    cancelTimeout: clearTimeout,
    noTimeout: -1,
    isPrimaryRenderer: true,
    getCurrentEventPriority: () => 99,
    getInstanceFromNode: () => null,
    beforeActiveInstanceBlur: () => { },
    afterActiveInstanceBlur: () => { },
    prepareScopeUpdate: () => { },
    getInstanceFromScope: () => null,
    detachDeletedInstance: () => { },
  }
  return hostConfig
}
