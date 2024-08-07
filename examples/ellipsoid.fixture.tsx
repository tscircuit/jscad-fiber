import { Ellipsoid } from "../lib"
import { JsCadFixture } from "../lib/components/jscad-fixture"

export default () => (
  <JsCadFixture wireframe>
    <Ellipsoid radius={[15, 10, 10]} color="brown" center={[0, 0, 10]} />
  </JsCadFixture>
)
