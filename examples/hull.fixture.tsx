import { Cuboid, Ellipsoid, Hull, Translate } from "../lib"
import { JsCadFixture } from "../lib/components/jscad-fixture"

export default () => (
  <JsCadFixture>
    <Hull>
      <Cuboid size={[10, 10, 10]} />
      <Translate offset={[0, 0, 15]}>
        <Ellipsoid radius={[10, 10, 10]} />
      </Translate>
    </Hull>
  </JsCadFixture>
)
