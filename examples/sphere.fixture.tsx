import { ExampleWrapper } from "lib/components/Example-wrapper"
import { Sphere } from "../lib"
import { JsCadView } from "../lib/components/jscad-view"

export default () => (
  <ExampleWrapper>
    <JsCadView wireframe>
      <Sphere radius={10} color="orange" />
    </JsCadView>
  </ExampleWrapper>
)
