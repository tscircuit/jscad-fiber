import { expect, test } from "bun:test"
import modeling from "@jscad/modeling"
import jscad from "@tscircuit/jscad"
import {
  Custom,
  ExtrudeLinear,
  Rectangle,
  Translate,
  Rotate,
  Union,
  renderToJscadModel,
} from "../lib/model"

test("native renderer collects kernel-owned names once through components and transforms", () => {
  let calls = 0
  function Part() {
    calls++
    return (
      <Union>
        <ExtrudeLinear height={8} topOutlineName="top">
          <Rectangle size={[20, 14]} />
        </ExtrudeLinear>
        <Translate offset={[0, 0, 10]}>
          <Rectangle name="mount" reference size={[24, 18]} />
        </Translate>
      </Union>
    )
  }
  const model = renderToJscadModel(
    <Translate offset={[10, 20, 30]}>
      <Rotate angles={[0, 0, Math.PI / 2]}>
        <Part />
      </Rotate>
    </Translate>,
    modeling,
  )
  expect(calls).toBe(1)
  expect(model.geometries).toHaveLength(1)
  expect(Object.keys(model.referenceFeatures)).toEqual(["top", "mount"])
  expect(model.referenceFeatures.top.matrix.slice(12, 15)).toEqual([10, 20, 38])
  expect(model.referenceFeatures.mount.matrix.slice(12, 15)).toEqual([
    10, 20, 40,
  ])
  expect(modeling.measurements.measureVolume(model.geometries[0])).toBeCloseTo(
    20 * 14 * 8,
  )
  expect(model.referenceFeatures).toEqual(
    jscad.references.collect(model.geometries),
  )
  const native = modeling.primitives.cuboid({ size: [2, 3, 4] })
  const custom = renderToJscadModel(<Custom geometry={native} />, modeling)
  expect(custom.geometries[0]).toBe(native)
  expect(custom.referenceFeatures).toEqual({})
})
