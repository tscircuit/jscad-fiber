import { Line, Mesh, type Scene } from "three"

/** Release the geometries and materials owned by a generated JSCAD scene. */
export function disposeThreeScene(scene: Scene) {
  scene.traverse((object) => {
    if (object instanceof Mesh || object instanceof Line) {
      object.geometry.dispose()
      const materials = Array.isArray(object.material)
        ? object.material
        : [object.material]
      materials.forEach((material) => material.dispose())
    }
  })
}
