import type * as FN from "./jscad-fns"

type CommonProps = { key?: any }

declare global {
  namespace JSX {
    interface IntrinsicElements {
      project: FN.ProjectProps & CommonProps
      extrudeRectangular: FN.ExtrudeRectangularProps & CommonProps
      extrudeRotate: FN.ExtrudeRotateProps & CommonProps
      extrudeHelical: FN.ExtrudeHelicalProps & CommonProps
      extrudeLinear: FN.ExtrudeLinearProps & CommonProps
      roundedCuboid: FN.RoundedCuboidProps & CommonProps
      geodesicSphere: FN.GeodesicSphereProps & CommonProps
      roundedCylinder: FN.RoundedCylinderProps & CommonProps
      cylinderElliptic: FN.CylinderEllipticProps & CommonProps
      jscadPolygon: FN.PolygonProps & CommonProps
      colorize: FN.ColorizeProps & CommonProps
      sphere: FN.SphereProps & CommonProps
      cuboid: FN.CuboidProps & CommonProps
      ellipsoid: FN.EllipsoidProps & CommonProps
      cylinder: FN.CylinderProps & CommonProps
      cube: FN.CubeProps & CommonProps
      torus: FN.TorusProps & CommonProps
      custom: FN.CustomProps & CommonProps
      union: FN.UnionProps & CommonProps
      circle: FN.CircleProps & CommonProps
      rectangle: FN.RectangleProps & CommonProps
      hull: FN.HullProps & CommonProps
      hullChain: FN.HullChainProps & CommonProps
      rotate: { angles: [number, number, number]; children: any } & CommonProps
      translate: { args: [number, number, number]; children: any } & CommonProps
    }
  }
}
