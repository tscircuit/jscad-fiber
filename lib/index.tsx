import ReactReconciler from "react-reconciler"
import { createHostConfig } from "./create-host-config"
import type { JSCADModule, JSCADPrimitive } from "./jscad-primitives"
import React from "react"
export * from "./jscad-fns"
export * from "./hooks/use-render-elements-to-jscad-plan"

// Create a function that returns the reconciler and root creation function
export function createJSCADRenderer(jscad: JSCADModule) {
  const hostConfig = createHostConfig(jscad)

  // Synchronous renderer that directly processes React elements
  function renderElementSync(
    element: React.ReactElement,
    container: JSCADPrimitive[],
  ) {
    const createInstanceFromHostConfig = hostConfig.createInstance

    function processElement(
      elem: React.ReactElement,
    ): JSCADPrimitive | JSCADPrimitive[] {
      const { type, props } = elem

      // Create instance using the same logic as the host config
      const instance = createInstanceFromHostConfig(
        type as string,
        props,
        container,
        jscad, // hostContext
        null, // internalInstanceHandle
      )

      return instance
    }

    try {
      const result = processElement(element)
      if (Array.isArray(result)) {
        container.push(...result)
      } else {
        container.push(result)
      }
    } catch (error) {
      console.error("Sync render error:", error)
      throw error
    }
  }

  function createJSCADRoot(
    container: JSCADPrimitive[],
    onError?: (error: Error) => void,
  ) {
    const reconciler = ReactReconciler(hostConfig)
    const root = reconciler.createContainer(
      container,
      0,
      null,
      false,
      null,
      "",
      (error) => {
        console.error(error)
        if (onError) onError(error)
      },
      null,
    )
    return {
      render(element: React.ReactElement, callback?: () => void) {
        if (callback) {
          // Async mode - use React reconciler
          reconciler.updateContainer(element, root, null, callback)
        } else {
          // Sync mode - use synchronous renderer
          try {
            renderElementSync(element, container)
          } catch (error) {
            if (onError) onError(error as Error)
            else throw error
          }
        }
      },
    }
  }

  return { createJSCADRoot }
}
