import { Cube } from "../lib"
import { ExampleWrapper } from "../lib/components/Example-wrapper"
import { JsCadView } from "../lib/components/jscad-view"
export default () => (
  <ExampleWrapper fileName={import.meta.url}>
    <JsCadView>
      <Cube size={10} color="orange" center={[0, 0, 10]} />
    </JsCadView>
  </ExampleWrapper>
)
