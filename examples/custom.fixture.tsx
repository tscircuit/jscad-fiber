import { booleans, primitives } from "@jscad/modeling"
import { Custom } from "../lib"
import { JsCadView } from "../lib/components/jscad-view"
import { ExampleWrapper } from "lib/components/Example-wrapper"

const cube = primitives.cube({ size: 10 })
const sphere = primitives.sphere({ radius: 6, segments: 32 })

const intersected = booleans.subtract(cube, sphere)

export default () => (
  <ExampleWrapper fileName="custom.fixture.tsx">
    <JsCadView>
      <Custom geometry={intersected} />
    </JsCadView>
  </ExampleWrapper>
)
