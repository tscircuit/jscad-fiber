import { Cuboid, Ellipsoid, HullChain, Translate } from "../lib"
import { JsCadFixture } from "../lib/components/jscad-fixture"

export default () => (
  <JsCadFixture>
    <HullChain>
      <Cuboid size={[10, 10, 10]} />
      <Translate offset={[0, 0, 10]}>
        <Ellipsoid radius={[10, 10, 12]} />
      </Translate>
      <Cuboid size={[10, 10, 10]} center={[0, 0, 20]} />
    </HullChain>
  </JsCadFixture>
)
