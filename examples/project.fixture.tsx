import Example from "src/Example";
import { JsCadFixture } from "../lib/components/jscad-fixture";
import { Project } from "../lib/jscad-fns";
import { Polygon } from "../lib/jscad-fns/polygon";

export default () => (
  <Example>
    <JsCadFixture>
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
    </JsCadFixture>
  </Example>
);
