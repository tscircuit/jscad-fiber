import { Torus } from "../lib"
import { JsCadFixture } from "../lib/components/jscad-fixture"

export default () => (
  <JsCadFixture wireframe>
    <Torus
      innerRadius={1}
      outerRadius={3}
      innerSegments={16}
      outerSegments={64}
    />
  </JsCadFixture>
)
