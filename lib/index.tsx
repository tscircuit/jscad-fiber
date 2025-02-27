import ReactReconciler from "react-reconciler"
import { createHostConfig } from "./create-host-config"
import type { JSCADModule, JSCADPrimitive } from "./jscad-primitives"
export * from "./jscad-fns"
export * from "./hooks/use-render-elements-to-jscad-plan"

// Create a function that returns the reconciler and root creation function
export function createJSCADRenderer(jscad: JSCADModule) {
  const hostConfig = createHostConfig(jscad)
  const errors: any[] = []

  function createJSCADRoot(container: JSCADPrimitive[]) {
    const reconciler = ReactReconciler(hostConfig)
    const root = reconciler.createContainer(
      container,
      0,
      null,
      false,
      null,
      "",
      (error: any) => {
        console.error(error)
        errors.push(error)
      },
      null,
    )
    return {
      render(element: React.ReactElement) {
        errors.length = 0
        // @ts-expect-error
        // https://github.com/diegomura/react-pdf/blob/fabecc56727dfb6d590a3fa1e11f50250ecbbea1/packages/reconciler/src/reconciler-31.js#L78
        reconciler.updateContainerSync(element, root, null, () => {})
        // @ts-expect-error
        // https://github.com/diegomura/react-pdf/blob/fabecc56727dfb6d590a3fa1e11f50250ecbbea1/packages/reconciler/src/reconciler-31.js#L78
        reconciler.flushSyncWork()

        if (errors.length > 0) {
          throw errors[0]
        }
      },
    }
  }

  return { createJSCADRoot }
}
