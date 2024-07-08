import { Cuboid } from "../lib"
import { JsCadFixture } from "../lib/components/jscad-fixture"

export default () => (
  <JsCadFixture>
    <Cuboid size={[15, 10, 10]} />
  </JsCadFixture>
)