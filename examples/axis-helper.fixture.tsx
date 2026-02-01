import { Cube, Sphere, Subtract } from "../lib"
import { JsCadView } from "../lib/components/jscad-view"
import { ExampleWrapper } from "../lib/components/Example-wrapper"

export default () => (
  <ExampleWrapper fileName={import.meta.url}>
    <JsCadView showAxes showGrid>
      <Subtract>
        <Cube size={10} color="orange" />
        <Sphere radius={6.5} color="blue" />
      </Subtract>
    </JsCadView>
  </ExampleWrapper>
)
