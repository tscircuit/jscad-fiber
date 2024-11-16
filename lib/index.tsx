import ReactReconciler from "react-reconciler"
import { createHostConfig } from "./create-host-config"
import type { JSCADModule, JSCADPrimitive } from "./jscad-primitives"
import cloneDeep from "lodash/cloneDeep";
export * from "./jscad-fns"
export * from "./components/jscad-fixture"
export * from "./components/jscad-three-mesh"
export * from "./convert-csg-to-three-geom"
export * from "./hooks/use-render-elements-to-jscad-plan"

// Create a function that returns the reconciler and root creation function
export function createJSCADRenderer(jscad: JSCADModule) {
  // Clone the JSCAD module to avoid unintended modifications
  const clonedJSCAD = cloneDeep(jscad);
  const hostConfig = createHostConfig(clonedJSCAD);

  function createJSCADRoot(container: JSCADPrimitive[]) {
    // Clone the container to ensure it remains unmodified
    const clonedContainer = cloneDeep(container);

    const reconciler = ReactReconciler(hostConfig);
    const root = reconciler.createContainer(
      clonedContainer,
      0,
      null,
      false,
      null,
      "",
      (error) => console.error("Reconciler error:", error),
      null
    );

    return {
      render(element: React.ReactElement) {
        try {
          reconciler.updateContainer(element, root, null, () => {
            console.log("Render successful.");
          });
        } catch (error) {
          console.error("Error during render:", error);
        }
      },
    }
  }

  return { createJSCADRoot }
}
