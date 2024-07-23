import { Cuboid } from "../lib"
import { JsCadFixture } from "../lib/components/jscad-fixture"
import { Colorize, Translate } from "../lib/jscad-fns"

export default () => (
  <JsCadFixture>
    <Cuboid size={[20, 10, 10]} />
    <Translate args={[0, 0, 15]}>
      <Colorize color={[1, 0, 0]}>
        <Cuboid size={[15, 10, 15]} />
      </Colorize>
    </Translate>
    <Translate args={[0, 0, -15]}>
      <Cuboid size={[15, 10, 15]} />
    </Translate>
  </JsCadFixture>
)
