import { ExampleWrapper } from "lib/components/Example-wrapper"
import { Cube, Sphere, Subtract } from "lib"
import { JsCadView } from "lib/components/jscad-view"

export default () => (
  <ExampleWrapper fileName={import.meta.url}>
    <JsCadView showGrid>
      <Subtract>
        <Cube size={10} />
        <Sphere radius={6} />
      </Subtract>
    </JsCadView>
  </ExampleWrapper>
)
