import { RoundedCylinder } from "../lib"
import { JsCadFixture } from "../lib/components/jscad-fixture"

export default () => (
  <JsCadFixture wireframe>
    <RoundedCylinder
      radius={10}
      height={20}
      roundRadius={5}
      color="#4B0082"
      center={[0, 0, 10]}
    />
  </JsCadFixture>
)
