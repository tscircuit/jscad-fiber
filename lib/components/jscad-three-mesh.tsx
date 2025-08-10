import { useJSCADRenderer } from "../useJSCADRenderer"
import { Primitive } from "./primitive"

export function JSCadThreeMesh({
  children,
}: {
  children: any
}) {
  const mesh = useJSCADRenderer(children)

  if (!mesh) {
    return null
  }

  return <Primitive object={mesh} />
}
