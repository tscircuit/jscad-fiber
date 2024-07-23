import { Polygon } from "../lib"
import { JsCadFixture } from "../lib/components/jscad-fixture"
import { Rotate } from "../lib/jscad-fns"

export default () => (
  <JsCadFixture>
    <Rotate angles={[0, 0, Math.PI]}>
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
    </Rotate>
  </JsCadFixture>
)