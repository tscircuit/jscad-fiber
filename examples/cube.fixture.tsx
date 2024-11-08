import { Cube } from "../lib"
import { JsCadView } from "../lib/components/jscad-view"
import { ExampleWrapper } from "../lib/components/Example-wrapper"

export default () => (
  <ExampleWrapper>
    <JsCadView>
      <Cube size={10} color="orange" center={[0, 0, 10]} />
    </JsCadView>
  </ExampleWrapper>
)
