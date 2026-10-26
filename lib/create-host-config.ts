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
  CustomProps,
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
import { materials, preserveMaterial, type MaterialOptions } from "./material"
import { isMinimalModeActive, withMinimalMode } from "./minimal-mode"
import {
  resolveDistance,
  resolveDistanceTuple2,
  resolveDistanceTuple3,
  resolveOptionalDistance,
  resolveSize3D,
} from "./utils/convert-distance"

export function createHostConfig(
  jscad: JSCADModule,
  options: {
    preserveReferences?: boolean
    minimal?: boolean
  } = {},
) {
  const applyMaterial = (material: MaterialOptions, geometry: any): any => {
    if (Array.isArray(geometry)) {
      return geometry.map((shape) => applyMaterial(material, shape))
    }
    return jscad.materials
      ? jscad.materials.applyMaterial(material, geometry)
      : materials.applyMaterial(material, geometry)
  }
  const createInstance = (
    type: string | ((props: any) => any),
    props: any,
    rootContainerInstance: any,
    hostContext: any,
    internalInstanceHandle: any,
  ): any => {
    const geometry = createGeometry(
      type,
      props,
      rootContainerInstance,
      hostContext,
      internalInstanceHandle,
    )
    // Components forward material to their host element. Apply it once there.
    return typeof type === "string" &&
      type !== "applyMaterial" &&
      type !== "minimalMode" &&
      props.material
      ? applyMaterial(props.material, geometry)
      : geometry
  }

  const createGeometry = (
    type: string | ((props: any) => any),
    props: any,
    rootContainerInstance: any,
    hostContext: any,
    internalInstanceHandle: any,
  ) => {
    const renderChildren = (children: React.ReactNode): any[] => {
      if (children == null || typeof children === "boolean") return []
      if (Array.isArray(children))
        return children.flatMap((child) => renderChildren(child))
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
    if (typeof type === "function") {
      const activeMinimal = isMinimalModeActive(
        props?.minimal ?? options.minimal,
      )
      return withMinimalMode(activeMinimal, () => renderChildren(type(props)))
    }

    const isMinimal = isMinimalModeActive(props?.minimal ?? options.minimal)
    const centerOption =
      isMinimal && props?.center !== undefined ? { center: props.center } : {}

    switch (type) {
      case "minimalMode":
        return withMinimalMode(props.minimal ?? true, () =>
          renderChildren(props.children),
        )
      case "applyMaterial":
        return renderChildren(props.children).map((shape) =>
          applyMaterial(props.material, shape),
        )
      case "cube":
        return jscad.primitives.cube({
          size: resolveSize3D((props as CubeProps).size, isMinimal),
          ...centerOption,
        } as any)
      case "sphere":
      case "jscadSphere":
        return jscad.primitives.sphere({
          radius: resolveDistance((props as SphereProps).radius, isMinimal),
          segments: (props as SphereProps).segments,
          ...centerOption,
        } as any)
      case "cuboid":
        return jscad.primitives.cuboid({
          size: resolveSize3D((props as CuboidProps).size, isMinimal),
          ...centerOption,
        } as any)
      case "roundedCuboid":
        return jscad.primitives.roundedCuboid({
          size: resolveSize3D((props as RoundedCuboidProps).size, isMinimal),
          roundRadius: resolveDistance(
            (props as RoundedCuboidProps).roundRadius,
            isMinimal,
          ),
          ...centerOption,
        } as any)
      case "geodesicSphere":
        return jscad.primitives.geodesicSphere({
          radius: resolveDistance(
            (props as GeodesicSphereProps).radius,
            isMinimal,
          ),
          frequency: (props as GeodesicSphereProps).frequency,
          ...centerOption,
        } as any)
      case "ellipsoid":
        return jscad.primitives.ellipsoid({
          radius: resolveDistanceTuple3(
            (props as EllipsoidProps).radius,
            isMinimal,
          ),
          ...centerOption,
        } as any)
      case "cylinder":
        return jscad.primitives.cylinder({
          radius: resolveDistance((props as CylinderProps).radius, isMinimal),
          height: resolveDistance((props as CylinderProps).height, isMinimal),
          ...centerOption,
        } as any)
      case "roundedCylinder":
        return jscad.primitives.roundedCylinder({
          radius: resolveDistance(
            (props as RoundedCylinderProps).radius,
            isMinimal,
          ),
          height: resolveDistance(
            (props as RoundedCylinderProps).height,
            isMinimal,
          ),
          roundRadius: resolveDistance(
            (props as RoundedCylinderProps).roundRadius,
            isMinimal,
          ),
          ...centerOption,
        } as any)
      case "cylinderElliptic":
        return jscad.primitives.cylinderElliptic({
          radius: resolveOptionalDistance(
            (props as CylinderEllipticProps).radius,
            isMinimal,
          ),
          height: resolveDistance(
            (props as CylinderEllipticProps).height,
            isMinimal,
          ),
          startRadius: (props as CylinderEllipticProps).startRadius
            ? resolveDistanceTuple2(
                (props as CylinderEllipticProps).startRadius,
                isMinimal,
              )
            : undefined,
          endRadius: (props as CylinderEllipticProps).endRadius
            ? resolveDistanceTuple2(
                (props as CylinderEllipticProps).endRadius,
                isMinimal,
              )
            : undefined,
          startAngle: (props as CylinderEllipticProps).startAngle,
          endAngle: (props as CylinderEllipticProps).endAngle,
          ...centerOption,
        } as any)
      case "torus":
        return jscad.primitives.torus({
          innerRadius: resolveDistance(
            (props as TorusProps).innerRadius,
            isMinimal,
          ),
          outerRadius: resolveDistance(
            (props as TorusProps).outerRadius,
            isMinimal,
          ),
          innerSegments: (props as TorusProps).innerSegments,
          outerSegments: (props as TorusProps).outerSegments,
          innerRotation: (props as TorusProps).innerRotation,
          outerRotation: (props as TorusProps).outerRotation,
          startAngle: (props as TorusProps).startAngle,
          ...centerOption,
        } as any)
      case "jscadPolygon": {
        return jscad.primitives.polygon({
          points: (props as PolygonProps).points,
        })
      }

      case "extrudeLinear": {
        const { children, ...extrudeProps } = props as ExtrudeLinearProps
        const { topOutlineName, bottomOutlineName } = extrudeProps
        const named =
          topOutlineName !== undefined || bottomOutlineName !== undefined
        for (const name of [topOutlineName, bottomOutlineName])
          if (name !== undefined && (typeof name !== "string" || !name.trim()))
            throw new Error("Extrusion outline names must be nonblank")

        const childrenGeometry = renderChildren(children)
        if (!childrenGeometry.length) return []
        if (named && childrenGeometry.length !== 1)
          throw new Error(
            "Named extrusion outlines require exactly one profile",
          )

        const extrudedGeometry = jscad.extrusions.extrudeLinear(
          {
            height: resolveDistance(extrudeProps.height, isMinimal),
            ...(topOutlineName !== undefined ? { topOutlineName } : {}),
            ...(bottomOutlineName !== undefined ? { bottomOutlineName } : {}),
            ...(extrudeProps.twistAngle !== undefined
              ? { twistAngle: extrudeProps.twistAngle }
              : {}),
            ...(extrudeProps.twistSteps !== undefined
              ? { twistSteps: extrudeProps.twistSteps }
              : {}),
          },
          singleElementUnnest(childrenGeometry),
        )
        return preserveMaterial(childrenGeometry[0] ?? {}, extrudedGeometry)
      }
      case "extrudeRotate": {
        const { children, ...extrudeProps } = props as ExtrudeRotateProps

        const childrenGeometry = renderChildren(children)
        if (!childrenGeometry.length) return []

        const extrudedGeometry = jscad.extrusions.extrudeRotate(
          {
            angle: extrudeProps.angle,
            // twistAngle: extrudeProps.twistAngle,
            // twistSteps: extrudeProps.twistSteps,
          },
          singleElementUnnest(childrenGeometry),
        )

        return preserveMaterial(childrenGeometry[0] ?? {}, extrudedGeometry)
      }
      case "extrudeRectangular": {
        const { children, ...extrudeProps } = props as ExtrudeRectangularProps

        const childrenGeometry = renderChildren(children)
        if (!childrenGeometry.length) return []

        const extrudedGeometry = jscad.extrusions.extrudeRectangular(
          {
            size: resolveDistance(extrudeProps.size, isMinimal),
            height: resolveDistance(extrudeProps.height, isMinimal),
          },
          singleElementUnnest(childrenGeometry),
        )

        return preserveMaterial(childrenGeometry[0] ?? {}, extrudedGeometry)
      }
      case "extrudeHelical": {
        const { children, ...extrudeProps } = props as ExtrudeHelicalProps

        const childrenGeometry = renderChildren(children)
        if (!childrenGeometry.length) return []

        const extrudedGeometry = jscad.extrusions.extrudeHelical(
          {
            height: resolveDistance(extrudeProps.height, isMinimal),
            angle: extrudeProps.angle,
            startAngle: extrudeProps.startAngle || 0,
            pitch:
              extrudeProps.pitch !== undefined
                ? resolveDistance(extrudeProps.pitch, isMinimal)
                : 0,
            endOffset:
              extrudeProps.endOffset !== undefined
                ? resolveDistance(extrudeProps.endOffset, isMinimal)
                : 0,
            segmetsPerRotation: extrudeProps.segmetsPerRotation || 32,
          },
          singleElementUnnest(childrenGeometry),
        )

        return preserveMaterial(childrenGeometry[0] ?? {}, extrudedGeometry)
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
        if (!childrenGeometry.length) return []

        const projectedGeometry = jscad.extrusions.project(
          {
            axis: projectProps.axis,
            origin: projectProps.origin,
          },
          singleElementUnnest(childrenGeometry),
        )

        return preserveMaterial(childrenGeometry[0] ?? {}, projectedGeometry)
      }
      case "colorize": {
        const { children, ...colorizeProps } = props as ColorizeProps

        const childrenGeometry = renderChildren(children)

        // Assert that color is an array
        const color = colorizeProps.color as unknown as [number, number, number]

        const colorizedGeometry = childrenGeometry.map((shape) =>
          preserveMaterial(shape, jscad.colors.colorize(color, shape)),
        )

        return colorizedGeometry
      }

      case "custom": {
        if (options.preserveReferences)
          throw new Error(
            "Raw Custom geometry is not supported by the plan compiler; use renderToJscadModel with a native kernel",
          )
        return (props as CustomProps).geometry
      }

      case "union": {
        const geometries = renderChildren(props.children)
        if (geometries.length === 0) return []
        if (geometries.length === 1) return geometries[0]
        return jscad.booleans.union(...geometries)
      }
      case "subtract": {
        const groups = React.Children.toArray(props.children)
          .map((child) => renderChildren(child))
          .filter((group) => group.length)
        if (!groups.length) return []
        const [bases, ...remaining] = groups
        if (bases.length !== 1)
          throw new Error("Subtract requires exactly one solid base")
        const cutters = remaining.flat()
        const difference = cutters.length
          ? jscad.booleans.subtract(bases[0], ...cutters)
          : bases[0]
        return preserveMaterial(bases[0], difference)
      }

      case "translate": {
        const { args, children } =
          props as React.JSX.IntrinsicElements["translate"]
        const childrenGeometries = renderChildren(children)
        return childrenGeometries.map((shape) =>
          preserveMaterial(shape, jscad.transforms.translate(args, shape)),
        )
      }

      case "rotate": {
        const { children, ...rotateProps } =
          props as React.JSX.IntrinsicElements["rotate"]

        const childrenGeometries = renderChildren(children)

        return childrenGeometries.map((shape) =>
          preserveMaterial(
            shape,
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
        if (name !== undefined && (typeof name !== "string" || !name.trim()))
          throw new Error("Named rectangles require a nonblank name")
        if (
          reference &&
          !options.preserveReferences &&
          !jscad.references?.reference
        )
          return []
        const resolvedSize = resolveDistanceTuple2(size, isMinimal)
        const geometry = jscad.primitives.rectangle({
          size: resolvedSize,
          ...centerOption,
        } as any)
        if (options.preserveReferences)
          return {
            ...geometry,
            ...(name !== undefined ? { name } : {}),
            ...(reference !== undefined ? { reference } : {}),
          }
        if (name === undefined) return geometry
        return reference
          ? jscad.references!.reference!(name, geometry)
          : (jscad.references?.name(name, geometry) ?? geometry)
      }

      case "circle":
      case "jscadCircle": {
        const { radius } = props as CircleProps

        return jscad.primitives.circle({
          radius: resolveDistance(radius, isMinimal),
          ...centerOption,
        } as any)
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
      type: string,
      oldProps: any,
      newProps: any,
      internalInstanceHandle: any,
    ) {
      // Re-create the instance with new props
      const newInstance = createInstance(type, newProps, instance, {}, null)

      if (Array.isArray(instance)) {
        instance.splice(
          0,
          instance.length,
          ...(Array.isArray(newInstance) ? newInstance : [newInstance]),
        )
        return
      }

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
