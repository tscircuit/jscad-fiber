import { ExampleWrapper } from "../lib/components/Example-wrapper"
import { Polygon } from "../lib"
import { JsCadView } from "../lib/components/jscad-view"
import { Rotate } from "../lib/jscad-fns"

export default () => (
  <ExampleWrapper fileName={import.meta.url}>
    <JsCadView>
      <Rotate angles={[0, 0, Math.PI]} color="cyan" center={[0, 0, 10]}>
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
    </JsCadView>
  </ExampleWrapper>
)
