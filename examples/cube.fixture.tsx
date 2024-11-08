import Example from "src/Example";
import { Cube } from "../lib";
import { JsCadFixture } from "../lib/components/jscad-fixture";

export default () => (
  <Example>
    <JsCadFixture>
      <Cube size={10} color="orange" center={[0, 0, 10]} />
    </JsCadFixture>
  </Example>
);
