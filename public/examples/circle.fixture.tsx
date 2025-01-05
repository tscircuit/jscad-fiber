import { ExampleWrapper } from "lib/components/Example-wrapper"
import { Circle } from "lib"
import { JsCadView } from "lib/components/jscad-view"

export default () => (
  <ExampleWrapper fileName={import.meta.url}>
    <JsCadView>
      <Circle radius={10} />
    </JsCadView>
  </ExampleWrapper>
)
