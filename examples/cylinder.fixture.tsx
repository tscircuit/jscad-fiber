import { Cylinder } from "../lib"
import { JsCadFixture } from "../lib/components/jscad-fixture"

export default () => (
  <JsCadFixture wireframe>
    <Cylinder radius={10} height={20} />
  </JsCadFixture>
)