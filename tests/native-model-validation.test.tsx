import { expect, test } from "bun:test"
import modeling from "@jscad/modeling"
import {
  ExtrudeLinear,
  Rectangle,
  Translate,
  renderToJscadModel,
} from "../lib/model"

test("native reference collection rejects duplicate and invalid names", () => {
  expect(() =>
    renderToJscadModel(
      <>
        <Rectangle name="same" size={[2, 3]} reference />
        <Rectangle name="same" size={[4, 5]} reference />
      </>,
      modeling,
    ),
  ).toThrow("Duplicate")
  expect(() =>
    renderToJscadModel(
      <Rectangle name=" " size={[2, 3]} reference />,
      modeling,
    ),
  ).toThrow("nonblank")
  expect(() =>
    renderToJscadModel(<Rectangle name="" size={[2, 3]} />, modeling),
  ).toThrow("nonblank")
  const node = (
    <Translate offset={[1, 2, 3]}>
      <ExtrudeLinear height={4} topOutlineName="top">
        <Rectangle size={[2, 3]} />
      </ExtrudeLinear>
    </Translate>
  )
  const first = renderToJscadModel(node, modeling)
  first.referenceFeatures.top.matrix[12] = 1000
  const second = renderToJscadModel(node, modeling)
  expect(second.referenceFeatures.top.matrix[12]).toBe(1)
  expect(
    modeling.geometries.geom2.isA(second.referenceFeatures.top.geometry),
  ).toBe(true)
  expect(() => renderToJscadModel("invalid", modeling)).toThrow(
    "Expected JSCAD elements",
  )
})
