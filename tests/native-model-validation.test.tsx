import { expect, test } from "bun:test"
import modeling from "@jscad/modeling"
import {
  Custom,
  Rotate,
  Rectangle,
  Subtract,
  Translate,
  renderToJscadModel,
} from "../lib/model"
import { renderToJscadPlan } from "../lib/headless"

test("model feature names and native-only evaluation reject ambiguous or unsupported input", () => {
  const solid = modeling.primitives.cuboid({ size: [2, 2, 2] })
  const path = modeling.geometries.path2.fromPoints({ closed: false }, [
    [0, 0],
    [1, 0],
  ])
  for (const element of [
    <Custom geometry={path} reference />,
    <Custom geometry={path} name="" reference />,
    <Custom geometry={path} name=" " />,
  ])
    expect(() => renderToJscadModel(element, modeling)).toThrow("nonblank")
  expect(() =>
    renderToJscadModel(
      <>
        <Custom geometry={path} name="edge" reference />
        <Custom geometry={solid} name="edge" />
      </>,
      modeling,
    ),
  ).toThrow("Duplicate")
  expect(() =>
    renderToJscadModel(
      <Custom geometry={{} as any} name="bad" reference />,
      modeling,
    ),
  ).toThrow("native")
  expect(() =>
    renderToJscadModel(
      <Translate offset={[Infinity, 0, 0]}>
        <Custom geometry={path} name="edge" reference />
      </Translate>,
      modeling,
    ),
  ).toThrow("finite")
  expect(() =>
    renderToJscadModel(
      <Rotate angles={[0, NaN, 0]}>
        <Custom geometry={path} name="edge" reference />
      </Rotate>,
      modeling,
    ),
  ).toThrow("finite")
  expect(() =>
    renderToJscadModel(
      <Subtract>
        <>
          <Custom geometry={solid} />
          <Custom geometry={solid} />
        </>
        <Custom geometry={solid} />
      </Subtract>,
      modeling,
    ),
  ).toThrow("exactly one")
  expect(
    renderToJscadModel(
      <Subtract>
        <Custom geometry={path} name="reference_only" reference />
        <Custom geometry={path} name="other_reference" reference />
      </Subtract>,
      modeling,
    ).geometries,
  ).toEqual([])
  expect(() => renderToJscadPlan(<Custom geometry={solid} />)).toThrow("Custom")
  expect(() =>
    renderToJscadPlan(<Custom geometry={path} name="edge" reference />),
  ).toThrow("Custom")
  expect(() =>
    renderToJscadModel(
      <>
        <Rectangle name="shared" size={[2, 2]} reference />
        <Custom geometry={path} name="shared" reference />
      </>,
      modeling,
    ),
  ).toThrow("Duplicate")
  const featureModel = renderToJscadModel(
    <Custom geometry={solid} name="__proto__" reference />,
    modeling,
  )
  expect(Object.hasOwn(featureModel.referenceFeatures, "__proto__")).toBe(true)
  expect(featureModel.referenceFeatures.__proto__.geometry).toBe(solid)
  const quarterTurn = renderToJscadModel(
    <Rotate angles={[0, Math.PI / 2, 0]}>
      <Custom geometry={path} name="edge" reference />
    </Rotate>,
    modeling,
  )
  expect(quarterTurn.referenceFeatures.edge.matrix[0]).toBe(0)
})
