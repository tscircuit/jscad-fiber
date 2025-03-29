import ReactReconciler from "react-reconciler"
import { createHostConfig } from "./create-host-config"
import type { JSCADModule, JSCADPrimitive } from "./jscad-primitives"
export * from "./jscad-fns"
export * from "./hooks/use-render-elements-to-jscad-plan"

// Create a function that returns the reconciler and root creation function
export function createJSCADRenderer(jscad: JSCADModule) {
  const hostConfig = createHostConfig(jscad)

  function createJSCADRoot(container: JSCADPrimitive[]) {
    const reconciler = ReactReconciler(hostConfig)
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
