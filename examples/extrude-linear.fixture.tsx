import { JsCadFixture } from "../lib/components/jscad-fixture"
import { ExtrudeLinear } from "../lib/jscad-fns"
import { Polygon } from "../lib/jscad-fns/polygon"

export default () => (
  <JsCadFixture>
    <ExtrudeLinear height={2} color="lightgreen" center={[0, 0, 4]}>
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
    </ExtrudeLinear>
  </JsCadFixture>
)
