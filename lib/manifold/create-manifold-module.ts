/**
 * Creates a JSCADModule-compatible adapter backed by manifold-3d via basefold.
 *
 * Consumers call:
 *   const module = await createManifoldModule()
 *
 * No manifold-3d import needed — basefold handles WASM loading internally.
 */

import { createJscadModule } from "basefold"

export async function createManifoldModule() {
  return createJscadModule()
}
