import { beforeAll, expect, test } from "bun:test"
import modeling from "@jscad/modeling"
import type { Geom3 } from "@jscad/modeling/src/geometries/types"
import { executeJscadOperations } from "jscad-planner"
import { jscad, renderToJscadPlan } from "../lib/headless"
import { createJSCADRenderer } from "../lib/renderer"

// Reduced from U_PICO in Devesh36/usb-c-aqi-meter: the PCB, main chip and
// USB socket retain their authored dimensions, positions and colours (mm).
// The source uses a Fragment, not an explicitly requested boolean union.
function AqiPicoModel() {
  return (
    <>
      <jscad.colorize color="#14664a">
        <jscad.cuboid size={[21, 51, 1]} center={[0, 0, 9]} />
      </jscad.colorize>
      <jscad.colorize color="#20242a">
        <jscad.cuboid size={[7, 7, 1.1]} center={[0, 0, 10.05]} />
      </jscad.colorize>
      <jscad.colorize color="#aaaeb1">
        <jscad.cuboid size={[8, 6, 2.6]} center={[0, 23, 10.8]} />
      </jscad.colorize>
    </>
  )
}

function faceColours(solids: Geom3[]) {
  return new Set(
    solids.flatMap((solid) =>
      modeling.geometries.geom3.toPolygons(solid).flatMap((polygon) => {
        const colour = polygon.color ?? solid.color
        return colour ? [colour.slice(0, 3).join(",")] : []
      }),
    ),
  )
}

// Orthographic view of the actual output polygons. Both columns use the same
// projection and painter order; grey is used only when no colour is present.
// Input is model-local XYZ in mm, Z up; output is SVG pixels, Y down.
function projectSolids(solids: Geom3[], offsetX: number) {
  const faces = solids.flatMap((solid) =>
    modeling.geometries.geom3.toPolygons(solid).map((polygon) => {
      const colour = polygon.color ?? solid.color ?? [0.65, 0.65, 0.65]
      const points = polygon.vertices
        .map(([x, y, z]) =>
          [
            offsetX + 6 * (0.8 * x + 0.6 * y),
            230 + 6 * (0.36 * x - 0.48 * y - 0.8 * z),
          ]
            .map((value) => value.toFixed(2))
            .join(","),
        )
        .join(" ")
      const depth =
        polygon.vertices.reduce(
          (sum, [x, y, z]) => sum + 0.48 * x - 0.64 * y + 0.6 * z,
          0,
        ) / polygon.vertices.length
      const fill = colour
        .slice(0, 3)
        .map((channel) => Math.round(channel * 255))
        .join(",")
      return {
        depth,
        svg: `<polygon points="${points}" fill="rgb(${fill})" stroke="#22313a" stroke-width="0.5"/>`,
      }
    }),
  )
  return faces
    .sort((a, b) => a.depth - b.depth)
    .map((face) => face.svg)
    .join("\n")
}

let expectedColours: Set<string>
let actualColours: Set<string>

beforeAll(async () => {
  const nativeSolids: Geom3[] = []
  createJSCADRenderer(modeling as any)
    .createJSCADRoot(nativeSolids)
    .render(<AqiPicoModel />)
  const plan = renderToJscadPlan(<AqiPicoModel />)
  const executed = executeJscadOperations(
    modeling as any,
    JSON.parse(JSON.stringify(plan)),
  )
  const headlessSolids: Geom3[] = Array.isArray(executed)
    ? executed
    : [executed]
  expectedColours = faceColours(nativeSolids)
  actualColours = faceColours(headlessSolids)

  // Controls and the visual snapshot must not be swallowed by test.failing.
  expect(nativeSolids).toHaveLength(3)
  expect(expectedColours.size).toBe(3)
  expect(
    modeling.measurements.measureAggregateBoundingBox(headlessSolids),
  ).toEqual(modeling.measurements.measureAggregateBoundingBox(nativeSolids))
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="420" viewBox="0 0 1000 420">
<rect width="1000" height="420" fill="#edf2f5"/>
<g font-family="sans-serif" fill="#172c3a" text-anchor="middle">
<text x="500" y="30" font-size="20">AQI meter U_PICO: headless compilation loses part colours</text>
<text x="250" y="65" font-size="18">Direct renderer: three authored colours</text>
<text x="750" y="65" font-size="18">Headless plan: all colours missing</text>
</g>
${projectSolids(nativeSolids, 250)}
${projectSolids(headlessSolids, 750)}
<text x="500" y="395" text-anchor="middle" font-family="sans-serif" font-size="16" fill="#172c3a">Same JSX model, dimensions and positions; no explicit union in the source.</text>
</svg>
`
  const snapshot = Bun.file(
    `${import.meta.dir}/__snapshots__/repro-aqi-pico-headless-colors.snap.svg`,
  )
  if (process.env.BUN_UPDATE_SNAPSHOTS === "1") await Bun.write(snapshot, svg)
  expect(svg).toBe(await snapshot.text())
})

test.failing(
  "headless compilation preserves the Pico's separately authored colours",
  () => {
    expect(actualColours).toEqual(expectedColours)
  },
)
