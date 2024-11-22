import { JsCadView } from "../lib/components/jscad-view"
import { Polygon } from "../lib/jscad-fns/polygon"
import { ExampleWrapper } from "lib/components/Example-wrapper"
export default () => (
  <ExampleWrapper fileName="polygon.fixture.tsx">
    <JsCadView>
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
    </JsCadView>
  </ExampleWrapper>
)
