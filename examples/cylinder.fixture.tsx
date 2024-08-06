import { Cylinder } from "../lib"
import { JsCadFixture } from "../lib/components/jscad-fixture"

export default () => (
  <JsCadFixture wireframe>
    <Cylinder radius={10} height={20} color="#F7E8AA" center={[0, 0, 10]} />
  </JsCadFixture>
)
