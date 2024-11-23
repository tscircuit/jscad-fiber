import { ExampleWrapper } from "lib/components/Example-wrapper"
import { Cuboid } from "../lib"
import { JsCadView } from "../lib/components/jscad-view"

export default () => (
  <ExampleWrapper fileName={import.meta.url}>
    <JsCadView zAxisUp showGrid>
      <Cuboid color="blue" offset={{ x: 0, y: 0, z: 0 }} size={[15, 10, 10]} />
    </JsCadView>
  </ExampleWrapper>
)
