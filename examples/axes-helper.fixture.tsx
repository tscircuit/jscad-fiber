import { ExampleWrapper } from "../lib/components/Example-wrapper"
import { JsCadView } from "../lib/components/jscad-view"
import { Cube } from "../lib/jscad-fns"

export default () => (
  <ExampleWrapper fileName={import.meta.url}>
    <JsCadView showGrid showAxes>
      <Cube size={10} />
    </JsCadView>
  </ExampleWrapper>
)
