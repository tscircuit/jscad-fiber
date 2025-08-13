import ReactReconciler from "react-reconciler"
import { createHostConfig } from "./create-host-config"
import type { JSCADModule, JSCADPrimitive } from "./jscad-primitives"
import React from "react"
export * from "./jscad-fns"
export * from "./hooks/use-render-elements-to-jscad-plan"
export * from "./components/jscad-view"

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
      elem: React.ReactElement | React.ReactElement[],
    ): JSCADPrimitive | JSCADPrimitive[] {
      // Handle arrays of elements
      if (Array.isArray(elem)) {
        return elem.flatMap((child) => processElement(child))
      }

      const { type, props } = elem

      // Handle React Fragment
      if (
        type === React.Fragment ||
        (typeof type === "symbol" && String(type).includes("react.fragment"))
      ) {
        // For fragments, just process the children directly
        if (props && typeof props === "object" && "children" in props) {
          return processElement((props as any).children)
        }
        return []
      }

      // Handle function components by calling them first
      if (typeof type === "function") {
        try {
          // Temporarily suppress console.error for hook-related errors
          const originalError = console.error
          console.error = (...args: any[]) => {
            const message = args.join(" ")
            if (!message.includes("Invalid hook call")) {
              originalError(...args)
            }
          }

          try {
            // @ts-ignore
            const result = type(props)
            console.error = originalError
            return processElement(result)
          } finally {
            console.error = originalError
          }
        } catch (error) {
          // If the function component fails (e.g., uses hooks in sync mode),
          // try to extract and process its children instead
          if (props && typeof props === "object" && "children" in props) {
            return processElement((props as any).children)
          }
          // Don't re-throw hook errors since we handle them gracefully
          if (
            error instanceof Error &&
            error.message.includes("Invalid hook call")
          ) {
            return []
          }
          throw error
        }
      }

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
