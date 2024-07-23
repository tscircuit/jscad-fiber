import { JsCadFixture } from "../lib/components/jscad-fixture"
import { Colorize, Cube } from "../lib/jscad-fns"

export default () => (
  <JsCadFixture>
    <Colorize color={"red"}>
      <Cube size={10} />
    </Colorize>
  </JsCadFixture>
)
