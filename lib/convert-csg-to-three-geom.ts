import {
  BufferGeometry,
  BufferAttribute,
  Vector3,
  Vector2,
  Matrix4,
  Shape,
  ShapeGeometry,
} from "three"

export default function convertCSGToThreeGeom(csg): BufferGeometry {
  console.log("csg", csg)

  if (csg.polygons) {
    // 3D shape
    const vertices = []
    const indices = []
    let idx = 0

    csg.polygons.forEach((polygon) => {
      polygon.vertices.forEach((vertex) => {
        vertex.index = idx
        vertices.push(vertex[0], vertex[1], vertex[2])
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
      new BufferAttribute(new Float32Array(vertices), 3)
    )
    geo.setIndex(indices)
    if (csg.transforms) {
      const transforms = new Matrix4()
      transforms.set(...csg.transforms).transpose()
      geo.applyMatrix4(transforms)
    }
    geo.computeVertexNormals()

    // Vertex normal averaging code (if needed)
    // ...

    geo.attributes.normal.needsUpdate = true
    return geo
  } else if (csg.sides) {
    const points = csg.sides.map((side) => new Vector2(side[0][0], side[0][1]))

    const geometry = new BufferGeometry().setFromPoints(points)

    // // 2D shape
    // const shape = new Shape()

    // // Move to the first point
    // const firstPoint = csg.sides[0][0]
    // shape.moveTo(firstPoint[0], firstPoint[1])

    // // Draw lines to subsequent points
    // for (let i = 1; i < csg.sides.length; i++) {
    //   const point = csg.sides[i][0]
    //   shape.lineTo(point[0], point[1])
    // }

    if (csg.transforms) {
      const transforms = new Matrix4()
      transforms.set(...csg.transforms).transpose()
      geometry.applyMatrix4(transforms)
    }

    return geometry
  } else {
    console.error("Invalid CSG object: neither polygons nor sides found")
    return new BufferGeometry()
  }
}
