import { ExampleWrapper } from "lib/components/Example-wrapper"
import { Circle } from "../lib"
import { JsCadView } from "../lib/components/jscad-view"

export default () => (
  <ExampleWrapper>
    <JsCadView>
      <Circle radius={10} />
    </JsCadView>
  </ExampleWrapper>
)
