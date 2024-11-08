import Example from "src/Example";
import { JsCadFixture } from "../lib/components/jscad-fixture";
import { ExtrudeRectangular } from "../lib/jscad-fns";
import { Polygon } from "../lib/jscad-fns/polygon";

export default () => (
  <Example>
    <JsCadFixture>
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
    </JsCadFixture>
  </Example>
);
