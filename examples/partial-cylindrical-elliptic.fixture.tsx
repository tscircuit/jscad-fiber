import { CylinderElliptic } from "../lib"
import { JsCadFixture } from "../lib/components/jscad-fixture"

export default () => (
  <JsCadFixture wireframe>
    <CylinderElliptic
      height={6}
      startRadius={[1, 2]}
      endRadius={[1, 2]}
      segments={64}
      startAngle={0}
      endAngle={Math.PI / 2}
    />
  </JsCadFixture>
)