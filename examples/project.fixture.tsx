import { ExampleWrapper } from "lib/components/Example-wrapper"
import { JsCadView } from "../lib/components/jscad-view"
import { Project } from "../lib/jscad-fns"
import { Polygon } from "../lib/jscad-fns/polygon"

export default () => (
  <ExampleWrapper fileName="project.fixture.tsx">
    <JsCadView>
      <Project axis={[0, 0, 1]} origin={[0, 0, 0]}>
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
      </Project>
    </JsCadView>
  </ExampleWrapper>
)
