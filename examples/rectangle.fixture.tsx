import { Rectangle } from "../lib"
import { JsCadFixture } from "../lib/components/jscad-fixture"

export default () => (
  <JsCadFixture>
    <Rectangle size={[10, 20]} />
  </JsCadFixture>
)