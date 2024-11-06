import { designCodeTorus } from "src/designCode";
import Example from "src/Example";
import { Torus } from "../lib";
import { JsCadFixture } from "../lib/components/jscad-fixture";

export default () => (
  <Example designCode={designCodeTorus}>
    <JsCadFixture wireframe>
      <Torus
        innerRadius={1}
        outerRadius={1.2}
        color="red"
        center={[0, 10, 0]}
      />
    </JsCadFixture>
  </Example>
);
