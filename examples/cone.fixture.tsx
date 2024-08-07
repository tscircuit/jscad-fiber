import { CylinderElliptic } from "../lib"
import { JsCadFixture } from "../lib/components/jscad-fixture"

export default () => (
  <JsCadFixture wireframe>
    <CylinderElliptic
      height={5}
      startRadius={[2, 2]}
      endRadius={[0, 0]}
      segments={32}
      startAngle={0}
      endAngle={Math.PI * 2}
      color="green"
      center={[0, 5, 5]}
    />
  </JsCadFixture>
)
