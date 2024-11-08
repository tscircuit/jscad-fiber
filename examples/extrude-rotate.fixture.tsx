import { JsCadView } from "../lib/components/jscad-view"
import { ExtrudeRotate } from "../lib/jscad-fns"
import { Polygon } from "../lib/jscad-fns/polygon"
import { ExampleWrapper } from "lib/components/Example-wrapper"

export default () => (
  <ExampleWrapper>
    <JsCadView>
      <ExtrudeRotate
        angle={Math.PI}
        segments={24}
        color="aqua"
        center={[0, 4, 4]}
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
      </ExtrudeRotate>
    </JsCadView>
  </ExampleWrapper>
)
