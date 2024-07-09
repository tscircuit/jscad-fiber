import { JsCadFixture } from "../lib/components/jscad-fixture"
import { Polygon } from "../lib/jscad-fns/polygon"

export default () => (
  <JsCadFixture>
    <Polygon
      points={[
        [-2, -1],
        [2, -1],
        [2.5, 2],
        [1, 1],
        [0, 2],
        [-1, 1],
        [-2, 2],
      ]}
    />
  </JsCadFixture>
)
