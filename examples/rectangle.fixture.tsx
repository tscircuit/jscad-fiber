import { ExampleWrapper } from "lib/components/Example-wrapper"
import { Rectangle } from "../lib"
import { JsCadView } from "../lib/components/jscad-view"

export default () => (
  <ExampleWrapper fileName="rectangle.fixture.tsx">
    <JsCadView>
      <Rectangle size={[10, 20]} />
    </JsCadView>
  </ExampleWrapper>
)
