import ReactReconciler from "react-reconciler"
import type { JSCADModule, JSCADPrimitive } from "./jscad-primitives"
import { createHostConfig } from "./create-host-config"
export * from "./jscad-fns"
export * from "./components/jscad-fixture"

// Create a function that returns the reconciler and root creation function
export function createJSCADRenderer(jscad: JSCADModule) {
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
