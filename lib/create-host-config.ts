import type { Geom3 } from "@jscad/modeling/src/geometries/types"
import type ReactReconciler from "react-reconciler"
import type { AnyConstructors } from "three/examples/jsm/nodes/Nodes.js"
import type {
  ColorizeProps,
  CubeProps,
  CuboidProps,
  CylinderEllipticProps,
  CylinderProps,
  EllipsoidProps,
  ExtrudeHelicalProps,
  ExtrudeLinearProps,
  ExtrudeRectangularProps,
  ExtrudeRotateProps,
  GeodesicSphereProps,
  HullChainProps,
  HullProps,
  PolygonProps,
  ProjectProps,
  RoundedCuboidProps,
  RoundedCylinderProps,
  SphereProps,
  TorusProps,
  UnionProps,
} from "./jscad-fns"
import type { JSCADModule, JSCADPrimitive } from "./jscad-primitives"

export function createHostConfig(jscad: JSCADModule) {
  const createInstance = (
    type: string | ((props: any) => any),
    props: any,
    rootContainerInstance: any,
    hostContext: any,
    internalInstanceHandle: any,
  ) => {
    const renderChildren = (children: any) => {
      if (Array.isArray(children)) {
        throw new Error("Unioning multiple children is not yet supported")
      }
      if (children) {
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

    // Handle function components
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
          innerRadius: (props as TorusProps).innerRadius,
          outerRadius: (props as TorusProps).outerRadius,
          innerSegments: (props as TorusProps).innerSegments,
          outerSegments: (props as TorusProps).outerSegments,
          innerRotation: (props as TorusProps).innerRotation,
          outerRotation: (props as TorusProps).outerRotation,
          startAngle: (props as TorusProps).startAngle,
        })
      case "jscadPolygon": {
        return jscad.primitives.polygon({
          points: (props as PolygonProps).points,
        })
      }

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
      case "extrudeRotate": {
        const { children, ...extrudeProps } = props as ExtrudeRotateProps

        const childrenGeometry = renderChildren(children)

        const extrudedGeometry = jscad.extrusions.extrudeRotate(
          {
            angle: extrudeProps.angle,
            // twistAngle: extrudeProps.twistAngle,
            // twistSteps: extrudeProps.twistSteps,
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
      case "extrudeHelical": {
        const { children, ...extrudeProps } = props as ExtrudeHelicalProps

        const childrenGeometry = renderChildren(children)

        const extrudedGeometry = jscad.extrusions.extrudeHelical(
          {
            height: extrudeProps.height,
            angle: extrudeProps.angle,
            startAngle: extrudeProps.startAngle || 0,
            pitch: extrudeProps.pitch || 0,
            endOffset: extrudeProps.endOffset || 0,
            segmetsPerRotation: extrudeProps.segmetsPerRotation || 32,
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
      case "colorize": {
        const { children, ...colorizeProps } = props as ColorizeProps

        const childrenGeometry = renderChildren(children)

        // Assert that color is an array
        const color = colorizeProps.color as unknown as [number, number, number]

        const colorizedGeometry = jscad.colors.colorize(color, childrenGeometry)

        return colorizedGeometry
      }

      case "custom": {
        const { geometry } = props as { geometry: Geom3 }

        return geometry
      }

      case "union": {
        const { children } = props as UnionProps
        if (!Array.isArray(children) || children.length < 2) {
          throw new Error("Union must have at least two children")
        }

        const geometries = children.map((child) =>
          createInstance(
            child.type,
            child.props,
            rootContainerInstance,
            hostContext,
            internalInstanceHandle,
          ),
        )
        return geometries.reduce((acc, curr) => jscad.booleans.union(acc, curr))
      }

      case "translate": {
        const { args, children } = props as JSX.IntrinsicElements["translate"]
        const childGeometry = renderChildren(children)
        return jscad.transforms.translate(args, childGeometry)
      }

      case "rotate": {
        const { children, ...rotateProps } =
          props as JSX.IntrinsicElements["rotate"]

        const childrenGeometry = renderChildren(children)

        const rotateGeometry = jscad.transforms.rotate(
          rotateProps.angles,
          childrenGeometry,
        )

        return rotateGeometry
      }

      case "hull": {
        const { children } = props as HullProps

        if (!Array.isArray(children) || children.length < 2) {
          throw new Error("Hull must have at least two children")
        }

        const geometries: any = children.map((child) =>
          createInstance(
            child.type,
            child.props,
            rootContainerInstance,
            hostContext,
            internalInstanceHandle,
          ),
        )

        return jscad.hulls.hull(geometries)
      }

      case "hullChain": {
        const { children } = props as HullChainProps

        if (!Array.isArray(children) || children.length < 2) {
          throw new Error("HullChain must have at least two children")
        }

        const geometries: any = children.map((child) =>
          createInstance(
            child.type,
            child.props,
            rootContainerInstance,
            hostContext,
            internalInstanceHandle,
          ),
        )

        return jscad.hulls.hullChain(geometries)
      }

      default:
        throw new Error(`Unknown element type: ${type}`)
    }
  }

  const hostConfig: ReactReconciler.HostConfig<
    string, // Type
    any, // Props
    JSCADPrimitive, // Container
    JSCADPrimitive, // Instance
    never, // TextInstance
    never, // SuspenseInstance
    never, // HydratableInstance
    JSCADPrimitive, // PublicInstance
    object, // HostContext
    boolean, // UpdatePayload
    never, // ChildSet
    number, // TimeoutHandle
    number // NoTimeout
  > = {
    // @ts-ignore
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
      oldProps: any,
      newProps: any,
    ) {
      // Re-create the instance with new props
      const newInstance = createInstance(type, newProps, instance, {}, null)

      // Clear properties of the old instance
      for (const key in instance) {
        delete instance[key]
      }

      // Assign new properties to the old instance
      Object.assign(instance, newInstance)
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
