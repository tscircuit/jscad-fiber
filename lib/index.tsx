import ReactReconciler from "react-reconciler"
import React from "react"
import type { JSCADModule, JSCADPrimitive } from "./jscad-primitives"
import { createHostConfig } from "./create-host-config"
import {
  Cube,
  Sphere,
  GeodesicSphere,
  Cuboid,
  RoundedCuboid,
  Ellipsoid,
  Cylinder,
  RoundedCylinder,
  CylinderElliptic,
  Torus,
  type CubeProps,
  type SphereProps,
  type CuboidProps,
  type RoundedCuboidProps,
  type GeodesicSphereProps,
  type EllipsoidProps,
  type CylinderProps,
  type RoundedCylinderProps,
  type CylinderEllipticProps,
  type TorusProps,
} from "./jscad-fns"

type Props =
  | CubeProps
  | SphereProps
  | GeodesicSphereProps
  | CuboidProps
  | RoundedCuboidProps
  | EllipsoidProps
  | CylinderProps
  | RoundedCylinderProps
  | CylinderEllipticProps
  | TorusProps

// Create a function that returns the reconciler and root creation function
function createJSCADRenderer(jscad: JSCADModule) {
  const hostConfig = createHostConfig(jscad)
  const reconciler = ReactReconciler(hostConfig)

  function createJSCADRoot(container: JSCADPrimitive[]) {
    const root = reconciler.createContainer(
      container,
      0,
      null,
      false,
      null,
      "",
      (error) => console.error(error),
      null,
    )
    return {
      render(element: React.ReactElement) {
        reconciler.updateContainer(element, root, null, () => {})
      },
    }
  }

  return { createJSCADRoot }
}

function Scene() {
  return (
    <>
      <Cube size={[10, 10, 10]} />
      <Sphere radius={5} />
      <Sphere radius={5} segments={64} />
      <GeodesicSphere radius={5} frequency={5} />
      <Cuboid size={[10, 10, 10]} />
      <RoundedCuboid size={[10, 10, 10]} roundRadius={5} />
      <Ellipsoid radius={[5, 5, 5]} />
      <Cylinder radius={5} height={10} />
      <RoundedCylinder radius={5} height={10} roundRadius={2} />
      <CylinderElliptic
        radius={5}
        height={10}
        startRadius={[2, 2]}
        endRadius={[3, 3]}
      />
      <Torus radius={5} segments={32} tube={10} />
    </>
  )
}

// Export the creation function and components
// Export the creation function and components
export {
  createJSCADRenderer,
  Cube,
  Sphere,
  GeodesicSphere,
  Cuboid,
  RoundedCuboid,
  Ellipsoid,
  Cylinder,
  RoundedCylinder,
  CylinderElliptic,
  Torus,
  Scene,
}
