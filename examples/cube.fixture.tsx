import { designCodeCube } from "src/designCode";
import Example from "src/Example";
import { Cube } from "../lib";
import { JsCadFixture } from "../lib/components/jscad-fixture";

export default () => (
  <Example designCode={designCodeCube}>
  <JsCadFixture>
    <Cube size={10} color="orange" center={[0, 0, 10]} />
  </JsCadFixture>
  </Example>
)
