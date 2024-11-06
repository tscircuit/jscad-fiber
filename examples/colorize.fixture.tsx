import Example from "src/Example"
import { designCodeColorizeCube } from "src/designCode"
import { JsCadFixture } from "../lib/components/jscad-fixture"
import { Colorize, Cube } from "../lib/jscad-fns"

export default () => (
  <Example designCode={designCodeColorizeCube}>
  <JsCadFixture>
    <Colorize color={"red"}>
      <Cube size={10} />
    </Colorize>
  </JsCadFixture>
  </Example>
)
