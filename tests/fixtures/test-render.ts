import * as jscad from "@jscad/modeling"
import { createJSCADRenderer } from "../../lib"

export const testRender = (reactNode: any) => {
  const container = []
  const renderer = createJSCADRenderer(jscad as any)
  const root = renderer.createJSCADRoot(container)
  root.render(reactNode)
  return container
}
