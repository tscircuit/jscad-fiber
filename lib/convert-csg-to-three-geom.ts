// @ts-nocheck
import {
  BufferGeometry,
  BufferAttribute,
  Vector3,
  Vector2,
  Matrix4,
  Color,
} from "three"

export default function convertCSGToThreeGeom(csg): BufferGeometry {

  if (csg.polygons) {
    // 3D shape
    const vertices = []
    const indices = []
    const colors = []
    let idx = 0

    csg.polygons.forEach((polygon) => {
      polygon.vertices.forEach((vertex) => {
        vertex.index = idx
        vertices.push(vertex[0], vertex[1], vertex[2])
        // Add color for each vertex
        if (csg.color && csg.color.length >= 3) {
          colors.push(csg.color[0], csg.color[1], csg.color[2])
        } else {
          colors.push(1, 1, 1) // Default to white if no color
        }
        idx++
      })
      const first = polygon.vertices[0].index
      for (let i = 2; i < polygon.vertices.length; i++) {
        const second = polygon.vertices[i - 1].index
        const third = polygon.vertices[i].index
        indices.push(first, second, third)
      }
    })

    const geo = new BufferGeometry()
    geo.setAttribute(
      "position",
      new BufferAttribute(new Float32Array(vertices), 3),
    )
    geo.setIndex(indices)

    // Add color attribute
    if (colors.length > 0) {
      geo.setAttribute(
        "color",
        new BufferAttribute(new Float32Array(colors), 3),
      )
    }

    if (csg.transforms) {
      const transforms = new Matrix4()
      transforms.set(...csg.transforms).transpose()
      geo.applyMatrix4(transforms)
    }
    geo.computeVertexNormals()

    return geo
  } else if (csg.sides) {
    // ... (2D shape handling remains the same)
  } else {
    console.error("Invalid CSG object: neither polygons nor sides found")
    return new BufferGeometry()
  }
}
