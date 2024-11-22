import { ExampleWrapper } from "lib/components/Example-wrapper"
import { Sphere } from "../lib"
import { JsCadView } from "../lib/components/jscad-view"

export default () => (
  <ExampleWrapper fileName="sphere.fixture.tsx">
    <JsCadView wireframe>
      <Sphere radius={10} color="orange" />
    </JsCadView>
  </ExampleWrapper>
)
