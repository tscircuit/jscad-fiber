import { Torus } from "../lib"
import { JsCadFixture } from "../lib/components/jscad-fixture"

export default () => (
  <JsCadFixture wireframe>
    <Torus innerRadius={1} outerRadius={1.2} color="red" center={[0, 10, 0]} />
  </JsCadFixture>
)
