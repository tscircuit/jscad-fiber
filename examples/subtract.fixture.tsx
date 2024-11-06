import { designCodeSubtract } from "src/designCode";
import Example from "src/Example";
import { Cube, Sphere, Subtract } from "../lib";
import { JsCadFixture } from "../lib/components/jscad-fixture";

export default () => (
  <Example designCode={designCodeSubtract}>
    <JsCadFixture>
      <Subtract>
        <Cube size={10} />
        <Sphere radius={6} />
      </Subtract>
    </JsCadFixture>
  </Example>
);
