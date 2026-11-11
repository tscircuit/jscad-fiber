import { ExampleWrapper } from "../lib/components/Example-wrapper"
import { Text } from "../lib"
import { JsCadView } from "../lib/components/jscad-view"

export default () => (
  <ExampleWrapper fileName={import.meta.url}>
    <JsCadView zAxisUp showGrid>
      <Text
        color="royalblue"
        fontSize={8}
        height={2}
        align="center"
        center={[0, 0, 0]}
      >
        JSCAD
      </Text>
    </JsCadView>
  </ExampleWrapper>
)
