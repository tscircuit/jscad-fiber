import React from "react"
import { createJSCADRenderer } from ".."

/**
 * Renders children and returns jscad plan JSON
 *
 * This is usually used in "tscircuit entrypoints" like <SchematicViewer />,
 * <PcbViewer /> or <3dViewer /> to convert their children into circuit json (soup)
 */
export const useRenderElementsToJscadPlan = (
  jscad: any,
  children: React.ReactElement | React.ReactElement[],
) => {
  const { renderer } = React.useMemo(() => {
    const renderer = createJSCADRenderer(jscad)
    return { renderer }
  }, [jscad])
  const [error, setError] = React.useState<Error | null>(null)
  const [loading, setLoading] = React.useState(true)
  const [jscadElms, setJscadElms] = React.useState<any[]>([])

  React.useMemo(() => {
    setLoading(true)
    setError(null)
    const jscadElmsContainer: any[] = []

    try {
      if (Array.isArray(children)) {
        // For arrays, render each child individually
        let completedChildren = 0
        const totalChildren = children.length

        children.forEach((child) => {
          const childContainer: any[] = []
          const childRoot = renderer.createJSCADRoot(childContainer, (err) => {
            setError(err)
            setLoading(false)
          })
          try {
            childRoot.render(child, () => {
              // Async callback for React 19
              completedChildren++
              jscadElmsContainer.push(...childContainer)
              if (completedChildren === totalChildren) {
                setJscadElms([...jscadElmsContainer])
                setLoading(false)
                setError(null)
              }
            })
            // For synchronous test environment, immediately collect results
            jscadElmsContainer.push(...childContainer)
          } catch (err: any) {
            setError(err)
            setLoading(false)
            return
          }
        })
      } else {
        const root = renderer.createJSCADRoot(jscadElmsContainer, (err) => {
          setError(err)
          setLoading(false)
        })
        root.render(children as any, () => {
          // Async callback for React 19
          setJscadElms([...jscadElmsContainer])
          setLoading(false)
          setError(null)
        })
      }

      // For synchronous test environment
      if (!error) {
        setJscadElms([...jscadElmsContainer])
        if (jscadElmsContainer.length > 0) {
          setLoading(false)
        }
      }
    } catch (err: any) {
      setError(err)
      setLoading(false)
    }

    return jscadElmsContainer
  }, [children, renderer])

  return { loading, jscadElms, error }
}
