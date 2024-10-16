import { Cube, Sphere, Subtract } from "../lib"
import { JsCadFixture } from "../lib/components/jscad-fixture"

export default () => (
  <JsCadFixture>
    <Subtract>
      <Cube size={10} />
      <Sphere radius={6} />
    </Subtract>
  </JsCadFixture>
)
