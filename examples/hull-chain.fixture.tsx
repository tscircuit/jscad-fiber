import { Cuboid, Ellipsoid, HullChain } from "../lib"
import { JsCadFixture } from "../lib/components/jscad-fixture"

export default () => (
  <JsCadFixture>
    <HullChain color="lightgreen" center={[0, 0, -10]}>
      <Cuboid size={[10, 10, 10]} />
      <Ellipsoid radius={[10, 10, 12]} center={[0, 0, 10]} />
      <Cuboid size={[10, 10, 10]} center={[0, 0, 20]} />
    </HullChain>
  </JsCadFixture>
)
