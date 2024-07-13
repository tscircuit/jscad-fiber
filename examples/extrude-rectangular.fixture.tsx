import { JsCadFixture } from "../lib/components/jscad-fixture"
import { ExtrudeRectangular } from "../lib/jscad-fns"
import { Polygon } from "../lib/jscad-fns/polygon"

export default () => (
  <JsCadFixture>
    <ExtrudeRectangular size={10} height={2}>
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
    </ExtrudeRectangular>
  </JsCadFixture>
)
