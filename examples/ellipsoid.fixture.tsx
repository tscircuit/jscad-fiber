import { Ellipsoid } from "../lib"
import { JsCadFixture } from "../lib/components/jscad-fixture"

export default () => (
  <JsCadFixture wireframe>
    <Ellipsoid radius={[15, 10, 10]} />
  </JsCadFixture>
)