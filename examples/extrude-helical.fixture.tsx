import { JsCadFixture } from "../lib/components/jscad-fixture"
import { ExtrudeHelical } from "../lib/jscad-fns"
import { Polygon } from "../lib/jscad-fns/polygon"

export default () => (
  <JsCadFixture>
    <ExtrudeHelical
      height={5}
      angle={Math.PI * 4}
      pitch={10}
      segmetsPerRotation={64}
    >
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
    </ExtrudeHelical>
  </JsCadFixture>
)