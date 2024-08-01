import { expect, test, mock } from "bun:test"
import React from "react"
import { createHookTester } from "../fixtures/create-hook-tester" // Adjust the import path as needed
import { useRenderElementsToJscadPlan } from "lib/hooks/use-render-elements" // Adjust the import path

// Mock JSCAD library
const mockJscad = {
  primitives: {
    cube: ({ size }: { size: number }) => ({ type: "cube", size }),
  },
  booleans: {
    union: (objects: any[]) => ({ type: "union", children: objects }),
  },
}

// // Mock React component that uses JSCAD primitives
// const MockCube = ({ size }: { size: number }) => {
//   return React.createElement("cube", { size })
// }

test("useRenderElementsToJscadPlan", async () => {
  const hookTester = createHookTester(useRenderElementsToJscadPlan)
  hookTester.overrideGlobals()

  // Test initial render
  const initialResult = hookTester.run(mockJscad, <cube size={10} />)
  expect(initialResult.loading).toBe(true)
  expect(initialResult.error).toBe(null)

  // Wait for next tick to allow useEffect to run
  await new Promise((resolve) => setTimeout(resolve, 0))

  // Test after render
  const afterRenderResult = hookTester.run(mockJscad, <cube size={10} />)
  expect(afterRenderResult.loading).toBe(false)
  expect(afterRenderResult.error).toBe(null)
  console.log(afterRenderResult)
  expect(afterRenderResult.jscadElms).toHaveLength(1)
  expect(afterRenderResult.jscadElms[0]).toEqual({ type: "cube", size: 10 })

  // Test with multiple children
  const multipleChildrenResult = hookTester.run(mockJscad, [
    <cube key={1} size={10} />,
    <cube key={2} size={20} />,
  ])
  await new Promise((resolve) => setTimeout(resolve, 0))
  const afterMultipleChildrenResult = hookTester.run(mockJscad, [
    <cube key={1} size={10} />,
    <cube key={2} size={20} />,
  ])
  expect(afterMultipleChildrenResult.loading).toBe(false)
  expect(afterMultipleChildrenResult.jscadElms).toHaveLength(2)
  expect(afterMultipleChildrenResult.jscadElms).toEqual([
    { type: "cube", size: 10 },
    { type: "cube", size: 20 },
  ])

  // Test error case
  const ErrorComponent = () => {
    throw new Error("Test error")
  }
  const errorResult = hookTester.run(mockJscad, <ErrorComponent />)
  await new Promise((resolve) => setTimeout(resolve, 0))
  const afterErrorResult = hookTester.run(mockJscad, <ErrorComponent />)
  expect(afterErrorResult.error).toBeInstanceOf(Error)
  expect(afterErrorResult.error?.message).toBe("Test error")
})
