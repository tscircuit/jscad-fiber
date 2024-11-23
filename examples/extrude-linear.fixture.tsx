import { ExampleWrapper } from "lib/components/Example-wrapper"
import { JsCadView } from "../lib/components/jscad-view"
import { ExtrudeLinear } from "../lib/jscad-fns"
import { Polygon } from "../lib/jscad-fns/polygon"

export default () => (
  <ExampleWrapper fileName={import.meta.url}>
    <JsCadView>
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
    </JsCadView>
  </ExampleWrapper>
)
