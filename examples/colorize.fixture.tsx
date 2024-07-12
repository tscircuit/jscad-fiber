import { JsCadFixture } from "../lib/components/jscad-fixture"
import { Colorize, Cube } from "../lib/jscad-fns"

export default () => (
  <JsCadFixture>
    <Colorize color={[1, 0, 0]}>
      <Cube size={10} />
    </Colorize>
  </JsCadFixture>
)