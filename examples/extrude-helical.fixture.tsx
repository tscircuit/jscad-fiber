import { ExampleWrapper } from "lib/components/Example-wrapper"
import { JsCadView } from "../lib/components/jscad-view"
import { ExtrudeHelical } from "../lib/jscad-fns"
import { Polygon } from "../lib/jscad-fns/polygon"

export default () => (
  <ExampleWrapper>
    <JsCadView>
      <ExtrudeHelical
        height={5}
        angle={Math.PI * 4}
        pitch={10}
        segmetsPerRotation={64}
        center={[0, 0, 10]}
        color="red"
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
    </JsCadView>
  </ExampleWrapper>
)
