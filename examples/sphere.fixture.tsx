import Example from "src/Example";
import { Sphere } from "../lib";
import { JsCadFixture } from "../lib/components/jscad-fixture";

export default () => (
  <Example>
    <JsCadFixture wireframe>
      <Sphere radius={10} color="orange" />
    </JsCadFixture>
  </Example>
);
