import { Cuboid } from "../lib"
import { JsCadFixture } from "../lib/components/jscad-fixture"
import { Translate } from "../lib/jscad-fns"

export default () => (
  <JsCadFixture>
    <Cuboid size={[20, 10, 10]} />
    <Cuboid center={[0, 0, 15]} size={[15, 10, 15]} color="red" />
    <Translate offset={[0, 0, -15]}>
      <Cuboid size={[15, 10, 15]} />
    </Translate>
  </JsCadFixture>
)
