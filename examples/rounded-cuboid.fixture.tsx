import { RoundedCuboid } from "../lib"
import { JsCadFixture } from "../lib/components/jscad-fixture"

export default () => (
  <JsCadFixture>
    <RoundedCuboid
      size={[15, 10, 10]}
      roundRadius={1}
      color="skyblue"
      center={[0, 0, 10]}
    />
  </JsCadFixture>
)
