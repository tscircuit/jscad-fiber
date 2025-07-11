import { ExampleWrapper } from "../lib/components/Example-wrapper"
import { JsCadView } from "../lib/components/jscad-view"
import { Cuboid, Subtract } from "../lib/jscad-fns"

export default () => (
  <ExampleWrapper fileName={import.meta.url}>
    <JsCadView zAxisUp showGrid>
      <Subtract>
        <Cuboid size={[10, 5, 2]} />
        {[-4, -2, 0, 2, 4].map((value, index) => (
          <Cuboid key={index} center={[value, 0, 0]} size={[1, 1, 4]} />
        ))}
      </Subtract>
    </JsCadView>
  </ExampleWrapper>
)
