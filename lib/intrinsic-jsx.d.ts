import type * as FN from "./jscad-fns"

declare global {
  namespace JSX {
    interface IntrinsicElements {
      project: FN.ProjectProps
      extrudeRectangular: FN.ExtrudeRectangularProps
      extrudeRotate: FN.ExtrudeRotateProps
      extrudeHelical: FN.ExtrudeHelicalProps
      extrudeLinear: FN.ExtrudeLinearProps
      roundedCuboid: FN.RoundedCuboidProps
      geodesicSphere: FN.GeodesicSphereProps
      roundedCylinder: FN.RoundedCylinderProps
      cylinderElliptic: FN.CylinderEllipticProps
      jscadPolygon: FN.PolygonProps
      colorize: FN.ColorizeProps
      sphere: FN.SphereProps
      cuboid: FN.CuboidProps
      ellipsoid: FN.EllipsoidProps
      cylinder: FN.CylinderProps
      cube: FN.CubeProps
      torus: FN.TorusProps
      custom: FN.CustomProps
      union: FN.UnionProps
      hull: FN.HullProps
      rotate: { angles: [number, number, number]; children: any }
      translate: { args: [number, number, number]; children: any }
    }
  }
}
