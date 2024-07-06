import { Sphere } from "../lib"
import { JsCadFixture } from "../lib/components/jscad-fixture"

export default () => (
  <JsCadFixture wireframe>
    <Sphere radius={10} />
  </JsCadFixture>
)
