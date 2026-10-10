import { ExampleWrapper } from "../lib/components/Example-wrapper"
import { Text } from "../lib"
import { JsCadView } from "../lib/components/jscad-view"

export default () => (
  <ExampleWrapper fileName={import.meta.url}>
    <JsCadView>
      <Text fontSize={4} height={1} color="orange" center={[0, 0, 0]}>
        Hello
      </Text>
    </JsCadView>
  </ExampleWrapper>
)
