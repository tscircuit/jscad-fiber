import Example from "src/Example";
import { JsCadFixture } from "../lib/components/jscad-fixture";
import { Cuboid, Subtract } from "../lib/jscad-fns";

export default () => (
  <Example>
    <JsCadFixture zAxisUp showGrid>
      <Subtract>
        <Cuboid size={[10, 5, 2]} />
        {[-4, -2, 0, 2, 4].map((value, index) => (
          <Cuboid key={index} center={[value, 0, 0]} size={[1, 1, 4]} />
        ))}
      </Subtract>
    </JsCadFixture>
  </Example>
);
