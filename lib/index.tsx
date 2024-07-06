import ReactReconciler from "react-reconciler"
import React from "react"
import type { JSCADModule, JSCADPrimitive } from "./jscad-primitives"
import { createHostConfig } from "./create-host-config"
import { Cube, Sphere, type CubeProps, type SphereProps } from "./jscad-fns"

type Props = CubeProps | SphereProps

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
      null
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
    </>
  )
}

// Export the creation function and components
export { createJSCADRenderer, Cube, Sphere, Scene }
