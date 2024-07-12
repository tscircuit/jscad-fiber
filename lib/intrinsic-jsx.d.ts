import type * as FN from "./jscad-fns"

declare global {
  namespace JSX {
    interface IntrinsicElements {
      colorize: FN.ColorizeProps
      extrudeLinear: FN.ExtrudeLinearProps
      cube: FN.CubeProps
      sphere: FN.SphereProps
      cuboid: FN.CuboidProps
      roundedCuboid: FN.RoundedCuboidProps
      geodesicSphere: FN.GeodesicSphereProps
      ellipsoid: FN.EllipsoidProps
      cylinder: FN.CylinderProps
      roundedCylinder: FN.RoundedCylinderProps
      cylinderElliptic: FN.CylinderEllipticProps
      torus: FN.TorusProps
      jscadPolygon: FN.PolygonProps
    }
  }
}
