import { useJSCADRenderer } from "../useJSCADRenderer"

export function JSCadThreeMesh({
  children,
}: {
  children: any
}) {

  const mesh = useJSCADRenderer(children);

  if (!mesh) {
    return null;
  }

  return <primitive object={mesh} />;
}