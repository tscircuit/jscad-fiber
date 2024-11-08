import { ExampleWrapper } from "lib/components/Example-wrapper"
import { JsCadView } from "../lib/components/jscad-view"
import { ExtrudeRectangular } from "../lib/jscad-fns"
import { Polygon } from "../lib/jscad-fns/polygon"

export default () => (
  <ExampleWrapper>
    <JsCadView>
      <ExtrudeRectangular
        size={10}
        height={2}
        color="lightgreen"
        center={[0, -10, 0]}
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
      </ExtrudeRectangular>
    </JsCadView>
  </ExampleWrapper>
)
