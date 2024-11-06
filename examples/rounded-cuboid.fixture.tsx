import { designCodeRoundedCuboid } from "src/designCode"
import Example from "src/Example"
import { RoundedCuboid } from "../lib"
import { JsCadFixture } from "../lib/components/jscad-fixture"

export default () => (
  <Example designCode={designCodeRoundedCuboid}>
  <JsCadFixture>
    <RoundedCuboid
      size={[15, 10, 10]}
      roundRadius={1}
      color="skyblue"
      center={[0, 0, 10]}
    />
  </JsCadFixture>
  </Example>
)
