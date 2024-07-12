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
      radius: number
      height: number
      startRadius?: number[]
      endRadius?: number[]
      startAngle?: number
      endAngle?: number
    }) => any
    torus: (options: { radius: number; tube: number; segments?: number }) => any
  }
  booleans: {
    union: (a: any, b: any) => any
    subtract: (a: any, b: any) => any
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
  }
  colors: {
    colorize: (options: [number, number, number], geometry: any) => any
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
  | ReturnType<JSCADModule["colors"]["colorize"]>

export type JSCADOperation =
  | JSCADModule["booleans"]["union"]
  | JSCADModule["booleans"]["subtract"]
