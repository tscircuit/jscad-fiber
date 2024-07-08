import { Torus } from "../lib"
import { JsCadFixture } from "../lib/components/jscad-fixture"

export default () => (
  <JsCadFixture wireframe>
    <Torus
      innerRadius={15}
      outerRadius={20}
      innerSegments={64}
      outerSegments={96}
      innerRotation={Math.PI}
      outerRotation={Math.PI / 2}
      startAngle={0}
    />
  </JsCadFixture>
)
