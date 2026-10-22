import { expect, test } from "bun:test"

test("native model entry bundles without importing viewer, browser, renderer or kernel runtime", async () => {
  const result = await Bun.build({
    entrypoints: [new URL("../lib/model.ts", import.meta.url).pathname],
    target: "browser",
    packages: "external",
  })
  expect(result.success).toBe(true)
  const source = await result.outputs[0].text()
  expect(source).not.toMatch(
    /from ["'](?:three|@jscad\/modeling|react-reconciler)["']/,
  )
  expect(source).not.toContain("OrbitControls")
  expect(source).not.toContain("document.createElement")
  expect(source).toContain("renderToJscadModel")
})
