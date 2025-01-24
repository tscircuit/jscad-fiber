import { ExampleWrapper } from "lib/components/Example-wrapper"
import { JsCadView } from "lib/components/jscad-view"
import { Colorize, Cube } from "lib/jscad-fns"

export default () => (
  <ExampleWrapper fileName={import.meta.url}>
    <JsCadView>
      <Colorize color={"red"}>
        <Cube size={10} />
      </Colorize>
    </JsCadView>
  </ExampleWrapper>
)
