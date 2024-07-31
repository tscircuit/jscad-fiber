import type { Point3 } from "./jscad-fns"

// Define a type for the JSCAD module structure we expect
export interface JSCADModule {
  primitives: {
    polygon: (options: { points: [number, number][] }) => any
    cube: (options: { size: number | [number, number, number] }) => any
    sphere: (options: { radius: number; segments?: number }) => any
    geodesicSphere: (options: { radius: number; frequency: number }) => any
    cuboid: (options: { size: number | [number, number, number] }) => any
    roundedCuboid: (options: {
      size: number | [number, number, number]
      roundRadius: number
    }) => any
    ellipsoid: (options: { radius: [number, number, number] }) => any
    cylinder: (options: {
      radius: number
      height: number
      startRadius?: number
      endRadius?: number
    }) => any
    roundedCylinder: (options: {
      radius: number
      height: number
      roundRadius: number
    }) => any
    cylinderElliptic: (options: {
      radius?: number
      height: number
      startRadius?: number[]
      endRadius?: number[]
      startAngle?: number
      endAngle?: number
    }) => any
    torus: (options: {
      innerRadius: number
      outerRadius: number
      innerSegments?: number
      outerSegments?: number
      innerRotation?: number
      outerRotation?: number
      startAngle?: number
    }) => any
  }
  booleans: {
    union: (a: any, b: any) => any
    subtract: (a: any, b: any) => any
  }
  maths: {
    slice: {
      fromPoints: (points: Array<[number, number]>) => any
      transform: (matrix: any, slice: any) => any
    }
    bezier: {
      create: (points: number[]) => any
      valueAt: (t: number, curve: any) => number
    }
    mat4: {
      create: () => any
      fromTranslation: (out: any, v: [number, number, number]) => any
      fromScaling: (out: any, v: [number, number, number]) => any
    }
  }
  transforms: {
    translate: (vector: [number, number, number], object: any) => any
    rotate: (angles: Point3, object: any) => any
  }
  extrusions: {
    extrudeLinear: (
      options: {
        height: number
        twistAngle?: number
        twistSteps?: number
      },
      geometry: any,
    ) => any
    extrudeHelical: (
      options: {
        angle: number
        pitch?: number
        segmetsPerRotation?: number
        startAngle?: number
        height?: number
        endOffset?: number
      },
      geometry: any,
    ) => any
    extrudeRotate: (
      options: {
        angle: number
        startAngle?: number
        segments?: number
      },
      geometry: any,
    ) => any
    extrudeRectangular: (
      options: {
        size: number
        height: number
      },
      geometry: any,
    ) => any
    project: (
      options: {
        axis: [number, number, number]
        origin: [number, number, number]
      },
      geometry: any,
    ) => any
  }
  colors: {
    colorize: (options: [number, number, number], geometry: any) => any
  }
  hulls: {
    hull: (options: {
      geometries: any
    }) => any
    hullChain: (options: {
      geometries: any
    }) => any
  }
}

// Define types for JSCAD objects and operations
export type JSCADPrimitive =
  | ReturnType<JSCADModule["primitives"]["cube"]>
  | ReturnType<JSCADModule["primitives"]["sphere"]>
  | ReturnType<JSCADModule["primitives"]["cuboid"]>
  | ReturnType<JSCADModule["primitives"]["roundedCuboid"]>
  | ReturnType<JSCADModule["primitives"]["geodesicSphere"]>
  | ReturnType<JSCADModule["primitives"]["ellipsoid"]>
  | ReturnType<JSCADModule["primitives"]["cylinder"]>
  | ReturnType<JSCADModule["primitives"]["roundedCylinder"]>
  | ReturnType<JSCADModule["primitives"]["cylinderElliptic"]>
  | ReturnType<JSCADModule["primitives"]["torus"]>
  | ReturnType<JSCADModule["primitives"]["polygon"]>
  | ReturnType<JSCADModule["extrusions"]["extrudeLinear"]>
  | ReturnType<JSCADModule["extrusions"]["extrudeHelical"]>
  | ReturnType<JSCADModule["extrusions"]["extrudeRotate"]>
  | ReturnType<JSCADModule["extrusions"]["extrudeRectangular"]>
  | ReturnType<JSCADModule["extrusions"]["project"]>
  | ReturnType<JSCADModule["colors"]["colorize"]>
  | ReturnType<JSCADModule["booleans"]["union"]>
  | ReturnType<JSCADModule["hulls"]["hull"]>

export type JSCADOperation =
  | JSCADModule["booleans"]["union"]
  | JSCADModule["booleans"]["subtract"]
