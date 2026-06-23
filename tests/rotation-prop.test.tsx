import { expect, test } from "bun:test"
import { measurements } from "@jscad/modeling"
import {
  Circle,
  Cube,
  Cuboid,
  Cylinder,
  CylinderElliptic,
  Ellipsoid,
  ExtrudeFromSlices,
  ExtrudeHelical,
  ExtrudeLinear,
  ExtrudeRectangular,
  ExtrudeRotate,
  GeodesicSphere,
  Hull,
  HullChain,
  Rectangle,
  RoundedCuboid,
  RoundedCylinder,
  Sphere,
  Subtract,
  Torus,
} from "lib/jscad-fns"
import { testRender } from "./fixtures/test-render"

test("rotation prop rotates wrapped uppercase shapes", () => {
  const [geometry] = testRender(<Cuboid size={[2, 4, 6]} rotation="90deg" />)

  const [min, max] = measurements.measureBoundingBox(geometry)

  expect(min[0]).toBeCloseTo(-2)
  expect(max[0]).toBeCloseTo(2)
  expect(min[1]).toBeCloseTo(-1)
  expect(max[1]).toBeCloseTo(1)
  expect(min[2]).toBeCloseTo(-3)
  expect(max[2]).toBeCloseTo(3)
})

test("rotation prop is accepted by all wrapped uppercase components", () => {
  const baseSlice = {
    edges: [
      [
        { x: 0, y: 0, z: 0 },
        { x: 1, y: 0, z: 0 },
      ],
      [
        { x: 1, y: 0, z: 0 },
        { x: 1, y: 1, z: 0 },
      ],
      [
        { x: 1, y: 1, z: 0 },
        { x: 0, y: 0, z: 0 },
      ],
    ],
  }

  expect(() =>
    testRender(
      <>
        <Cube size={1} rotation="15deg" />
        <Cuboid size={[1, 2, 3]} rotation="15deg" />
        <RoundedCuboid size={[1, 2, 3]} roundRadius={0.1} rotation="15deg" />
        <Cylinder radius={1} height={2} rotation="15deg" />
        <RoundedCylinder
          radius={1}
          height={2}
          roundRadius={0.1}
          rotation="15deg"
        />
        <CylinderElliptic
          height={2}
          startRadius={[1, 0.5]}
          endRadius={[0.5, 1]}
          rotation="15deg"
        />
        <Ellipsoid radius={[1, 2, 3]} rotation="15deg" />
        <Sphere radius={1} rotation="15deg" />
        <GeodesicSphere radius={1} frequency={6} rotation="15deg" />
        <Torus innerRadius={1} outerRadius={4} rotation="15deg" />
        <ExtrudeLinear height={1} rotation="15deg">
          <Rectangle size={[1, 1]} />
        </ExtrudeLinear>
        <ExtrudeHelical height={1} angle={Math.PI} rotation="15deg">
          <Circle radius={1} />
        </ExtrudeHelical>
        <ExtrudeRectangular size={1} height={1} rotation="15deg">
          <Circle radius={1} />
        </ExtrudeRectangular>
        <ExtrudeRotate angle={Math.PI} rotation="15deg">
          <Circle radius={1} />
        </ExtrudeRotate>
        <ExtrudeFromSlices baseSlice={baseSlice} rotation="15deg" />
        <Hull rotation="15deg">
          <Cube size={1} />
          <Sphere radius={1} center={[1, 0, 0]} />
        </Hull>
        <HullChain rotation="15deg">
          <Cube size={1} />
          <Sphere radius={1} center={[1, 0, 0]} />
        </HullChain>
        <Subtract rotation="15deg">
          <Cube size={2} />
          <Sphere radius={1} />
        </Subtract>
      </>,
    ),
  ).not.toThrow()
})
