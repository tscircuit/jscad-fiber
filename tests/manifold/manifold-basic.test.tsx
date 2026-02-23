import { describe, it, expect, beforeAll } from "bun:test"
import { createJSCADRenderer } from "../../lib"
import { createManifoldModule } from "../../lib/manifold"
import type { BasefoldGeom3 } from "../../lib/manifold"

let manifoldModule: Awaited<ReturnType<typeof createManifoldModule>>

function manifoldRender(reactNode: any) {
  const container: any[] = []
  const renderer = createJSCADRenderer(manifoldModule)
  const root = renderer.createJSCADRoot(container)
  root.render(reactNode)
  return container
}

beforeAll(async () => {
  manifoldModule = await createManifoldModule()
})

describe("manifold backend - primitives", () => {
  it("should render a cube", () => {
    const result = manifoldRender(<cube size={10} />)
    expect(result.length).toBe(1)
    expect(result[0].polygons.length).toBeGreaterThan(0)
    // BasefoldGeom3 exposes .volume()
    expect((result[0] as BasefoldGeom3).volume()).toBeCloseTo(1000, 0)
  })

  it("should render a cuboid", () => {
    const result = manifoldRender(<cuboid size={[10, 20, 30]} />)
    expect(result.length).toBe(1)
    expect(result[0].polygons.length).toBeGreaterThan(0)
  })

  it("should render a sphere", () => {
    const result = manifoldRender(<sphere radius={5} />)
    expect(result.length).toBe(1)
    expect(result[0].polygons.length).toBeGreaterThan(0)
  })

  it("should render a cylinder", () => {
    const result = manifoldRender(<cylinder radius={5} height={10} />)
    expect(result.length).toBe(1)
    expect(result[0].polygons.length).toBeGreaterThan(0)
  })

  it("should render a roundedCuboid", () => {
    const result = manifoldRender(
      <roundedCuboid size={[10, 10, 10]} roundRadius={1} />,
    )
    expect(result.length).toBe(1)
    expect(result[0].polygons.length).toBeGreaterThan(0)
  })

  it("should render a roundedCylinder", () => {
    const result = manifoldRender(
      <roundedCylinder radius={5} height={10} roundRadius={1} />,
    )
    expect(result.length).toBe(1)
    expect(result[0].polygons.length).toBeGreaterThan(0)
  })

  it("should render a torus", () => {
    const result = manifoldRender(<torus innerRadius={3} outerRadius={5} />)
    expect(result.length).toBe(1)
    expect(result[0].polygons.length).toBeGreaterThan(0)
  })

  it("should render an ellipsoid", () => {
    const result = manifoldRender(<ellipsoid radius={[5, 3, 2]} />)
    expect(result.length).toBe(1)
    expect(result[0].polygons.length).toBeGreaterThan(0)
  })

  it("should render a geodesicSphere", () => {
    const result = manifoldRender(<geodesicSphere radius={5} frequency={2} />)
    expect(result.length).toBe(1)
    expect(result[0].polygons.length).toBeGreaterThan(0)
  })

  it("should render a cylinderElliptic", () => {
    const result = manifoldRender(
      <cylinderElliptic
        height={10}
        startRadius={[3, 5]}
        endRadius={[3, 5]}
      />,
    )
    expect(result.length).toBe(1)
    expect(result[0].polygons.length).toBeGreaterThan(0)
  })
})

describe("manifold backend - booleans", () => {
  it("should union two cubes", () => {
    const result = manifoldRender(
      <union>
        <cube size={10} />
        <cube size={5} />
      </union>,
    )
    expect(result.length).toBe(1)
    expect(result[0].polygons.length).toBeGreaterThan(0)
  })

  it("should subtract a sphere from a cube", () => {
    const result = manifoldRender(
      <subtract>
        <cube size={10} />
        <sphere radius={5} />
      </subtract>,
    )
    expect(result.length).toBe(1)
    expect(result[0].polygons.length).toBeGreaterThan(0)
  })
})

describe("manifold backend - transforms", () => {
  it("should translate a cube", () => {
    const result = manifoldRender(
      <translate args={[5, 0, 0]}>
        <cube size={10} />
      </translate>,
    )
    expect(result.length).toBe(1)
    const polygons = result[0].polygons
    expect(polygons.length).toBeGreaterThan(0)
    // All vertices should have x >= 0
    for (const poly of polygons) {
      for (const vert of poly.vertices) {
        expect(vert[0]).toBeGreaterThanOrEqual(-0.01)
      }
    }
  })

  it("should rotate a cube", () => {
    const result = manifoldRender(
      <rotate angles={[0, 0, Math.PI / 4]}>
        <cube size={10} />
      </rotate>,
    )
    expect(result.length).toBe(1)
    expect(result[0].polygons.length).toBeGreaterThan(0)
  })
})

describe("manifold backend - extrusions", () => {
  it("should extrude a polygon linearly", () => {
    const result = manifoldRender(
      <extrudeLinear height={5}>
        <jscadPolygon
          points={[
            [-5, -5],
            [5, -5],
            [5, 5],
            [-5, 5],
          ]}
        />
      </extrudeLinear>,
    )
    expect(result.length).toBe(1)
    expect(result[0].polygons.length).toBeGreaterThan(0)
  })

  it("should extrude a circle", () => {
    const result = manifoldRender(
      <extrudeLinear height={10}>
        <circle radius={5} />
      </extrudeLinear>,
    )
    expect(result.length).toBe(1)
    expect(result[0].polygons.length).toBeGreaterThan(0)
  })
})

describe("manifold backend - hull", () => {
  it("should hull two cubes", () => {
    const result = manifoldRender(
      <hull>
        <cube size={2} />
        <translate args={[10, 0, 0]}>
          <cube size={2} />
        </translate>
      </hull>,
    )
    expect(result.length).toBe(1)
    expect(result[0].polygons.length).toBeGreaterThan(0)
  })
})

describe("manifold backend - colorize", () => {
  it("should colorize a cube", () => {
    const result = manifoldRender(
      <colorize color={[1, 0, 0] as any}>
        <cube size={10} />
      </colorize>,
    )
    expect(result.length).toBe(1)
    expect(result[0].color).toEqual([1, 0, 0])
    expect(result[0].polygons.length).toBeGreaterThan(0)
  })
})

describe("manifold backend - 2D shapes", () => {
  it("should render a rectangle as 2D geometry", () => {
    const result = manifoldRender(<rectangle size={[10, 5]} />)
    expect(result.length).toBe(1)
    expect(result[0].sides.length).toBeGreaterThan(0)
  })

  it("should render a circle as 2D geometry", () => {
    const result = manifoldRender(<circle radius={5} />)
    expect(result.length).toBe(1)
    expect(result[0].sides.length).toBeGreaterThan(0)
  })
})

describe("manifold backend - combined operations", () => {
  it("should handle a complex component-like scenario", () => {
    const result = manifoldRender(
      <>
        {/* Body */}
        <colorize color={[0.2, 0.2, 0.2] as any}>
          <cuboid size={[4, 2, 1]} />
        </colorize>
        {/* Lead 1 */}
        <colorize color={[0.8, 0.8, 0.8] as any}>
          <translate args={[-2.5, 0, 0]}>
            <cuboid size={[1, 0.5, 0.2]} />
          </translate>
        </colorize>
        {/* Lead 2 */}
        <colorize color={[0.8, 0.8, 0.8] as any}>
          <translate args={[2.5, 0, 0]}>
            <cuboid size={[1, 0.5, 0.2]} />
          </translate>
        </colorize>
      </>,
    )
    expect(result.length).toBe(3)
    expect(result[0].color).toEqual([0.2, 0.2, 0.2])
    expect(result[1].color).toEqual([0.8, 0.8, 0.8])
  })
})
