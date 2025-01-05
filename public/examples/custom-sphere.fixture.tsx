import { ExampleWrapper } from "lib/components/Example-wrapper"
import { Sphere } from "lib"
import { JsCadView } from "lib/components/jscad-view"

export default () => (
  <ExampleWrapper fileName={import.meta.url}>
    <JsCadView wireframe>
      <Sphere radius={10} segments={64} />
    </JsCadView>
  </ExampleWrapper>
)
