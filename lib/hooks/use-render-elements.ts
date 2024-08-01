import { createHostConfig } from "../create-host-config"
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

  const jscadElms = React.useMemo(() => {
    setLoading(true)
    const jscadElms: any[] = []
    const root = renderer.createJSCADRoot(jscadElms)

    try {
      root.render(children as any)
      setLoading(false)
      setError(null)
    } catch (err: any) {
      setError(err)
    }

    return jscadElms
  }, [children])

  return { loading, jscadElms, error }
}
