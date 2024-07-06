// Define a type for the JSCAD module structure we expect
export interface JSCADModule {
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
export type JSCADPrimitive =
  | ReturnType<JSCADModule["primitives"]["cube"]>
  | ReturnType<JSCADModule["primitives"]["sphere"]>
export type JSCADOperation =
  | JSCADModule["booleans"]["union"]
  | JSCADModule["booleans"]["subtract"]
