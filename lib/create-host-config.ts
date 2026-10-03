import type { Geom3 } from "@jscad/modeling/src/geometries/types"
import type ReactReconciler from "react-reconciler"
import {
  DefaultEventPriority,
  DiscreteEventPriority,
} from "react-reconciler/constants.js"
import type {
  CircleProps,
  ColorizeProps,
  CubeProps,
  CuboidProps,
  CylinderEllipticProps,
  CylinderProps,
  EllipsoidProps,
  ExtrudeFromSlicesProps,
  ExtrudeHelicalProps,
  ExtrudeLinearProps,
  ExtrudeRectangularProps,
  ExtrudeRotateProps,
  GeodesicSphereProps,
  PolygonProps,
  ProjectProps,
  RectangleProps,
  RoundedCuboidProps,
  RoundedCylinderProps,
  Slice,
  SphereProps,
  TorusProps,
} from "./jscad-fns"
import type { JSCADModule, JSCADPrimitive } from "./jscad-primitives"
import React from "react"
import { singleElementUnnest } from "./utils/singleElementUnnest"
export function createHostConfig(
  jscad: JSCADModule,
  options: { preserveReferences?: boolean } = {},
) {
  const createInstance = (
    type: string | ((props: any) => any),
    props: any,
    rootContainerInstance: any,
    hostContext: any,
    internalInstanceHandle: any,
  ) => {
    const renderChildren = (children: React.ReactNode): any[] => {
      if (children == null || typeof children === "boolean") return []
      if (Array.isArray(children)) return children.flatMap(renderChildren)
      if (!React.isValidElement(children))
        throw new Error(
          "Expected JSCAD elements, not text or arbitrary objects",
        )
      const result = createInstance(
        children.type as any,
        children.props,
        [],
        hostContext,
        internalInstanceHandle,
      )
      return Array.isArray(result)
        ? result.flat(Infinity)
        : result == null
          ? []
          : [result]
    }
    if ((type as unknown) === React.Fragment)
      return renderChildren(props.children)
    if (typeof type === "function") return renderChildren(type(props))

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
          singleElementUnnest(childrenGeometry),
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
          singleElementUnnest(childrenGeometry),
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
          singleElementUnnest(childrenGeometry),
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
          singleElementUnnest(childrenGeometry),
        )

        return extrudedGeometry
      }

      case "extrudeFromSlices": {
        const { baseSlice, ...extrudeProps } = props as ExtrudeFromSlicesProps

        const extrudedGeometry = jscad.extrusions.extrudeFromSlices(
          extrudeProps,
          baseSlice as Slice,
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
          singleElementUnnest(childrenGeometry),
        )

        return projectedGeometry
      }
      case "colorize": {
        const { children, ...colorizeProps } = props as ColorizeProps

        const childrenGeometry = renderChildren(children)

        // Assert that color is an array
        const color = colorizeProps.color as unknown as [number, number, number]

        const colorizedGeometry = singleElementUnnest(
          childrenGeometry.map((shape) => jscad.colors.colorize(color, shape)),
        )

        return colorizedGeometry
      }

      case "custom": {
        const { geometry } = props as { geometry: Geom3 }

        return geometry
      }

      case "union": {
        const geometries = renderChildren(props.children)
        if (geometries.length === 0) return []
        if (geometries.length === 1) return geometries[0]
        return jscad.booleans.union(...geometries)
      }
      case "subtract": {
        const children = React.Children.toArray(props.children)
        if (children.length < 2)
          throw new Error(
            "Subtract must have at least one base component and one component to subtract.",
          )
        const bases = renderChildren(children[0])
        if (bases.length !== 1)
          throw new Error("Subtract requires exactly one solid base")
        const cutters = children.slice(1).flatMap(renderChildren)
        return cutters.length
          ? jscad.booleans.subtract(bases[0], ...cutters)
          : bases[0]
      }

      case "translate": {
        const { args, children } =
          props as React.JSX.IntrinsicElements["translate"]
        const childrenGeometries = renderChildren(children)
        return singleElementUnnest(
          childrenGeometries.map((shape) =>
            jscad.transforms.translate(args, shape),
          ),
        )
      }

      case "rotate": {
        const { children, ...rotateProps } =
          props as React.JSX.IntrinsicElements["rotate"]

        const childrenGeometries = renderChildren(children)

        return singleElementUnnest(
          childrenGeometries.map((shape) =>
            jscad.transforms.rotate(rotateProps.angles, shape),
          ),
        )
      }

      case "hull":
      case "hullChain": {
        const geometries = renderChildren(props.children)
        if (!geometries.length) return []
        if (geometries.length === 1) return geometries[0]
        return jscad.hulls[type](...geometries)
      }

      case "rectangle": {
        const { size, name, reference } = props as RectangleProps
        if (reference && !name?.trim())
          throw new Error("Reference rectangles require a nonblank name")
        if (reference && !options.preserveReferences) return []
        const geometry = jscad.primitives.rectangle({ size })
        return options.preserveReferences &&
          (name !== undefined || reference !== undefined)
          ? {
              ...geometry,
              ...(name !== undefined ? { name } : {}),
              ...(reference !== undefined ? { reference } : {}),
            }
          : geometry
      }

      case "circle": {
        const { radius } = props as CircleProps

        return jscad.primitives.circle({ radius })
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
    never, // FormInstance
    JSCADPrimitive, // PublicInstance
    object, // HostContext
    never, // ChildSet
    number, // TimeoutHandle
    number, // NoTimeout
    any // TransitionStatus
  > = {
    // @ts-ignore
    now: Date.now,
    supportsMutation: true,
    supportsPersistence: false,
    supportsHydration: false,
    currentUpdatePriority: DefaultEventPriority,

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
    resetAfterCommit() {},
    getPublicInstance(instance: JSCADPrimitive) {
      return instance
    },
    getRootHostContext(rootContainer: any) {
      return jscad
    },
    getChildHostContext(
      parentHostContext: any,
      type: string,
      rootContainer: JSCADPrimitive,
    ) {
      return parentHostContext
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
    resolveUpdatePriority: () => DiscreteEventPriority,
    setCurrentUpdatePriority: (priority: number) => {},
    getCurrentUpdatePriority: () => {
      return DefaultEventPriority
    },
    maySuspendCommit() {
      return false
    },
  }
  return hostConfig
}
