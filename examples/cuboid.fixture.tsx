import { designCodeCuboid } from "src/designCode";
import Example from "src/Example";
import { Cuboid } from "../lib";
import { JsCadFixture } from "../lib/components/jscad-fixture";

export default () => (
  <Example designCode={designCodeCuboid}>
  <JsCadFixture zAxisUp showGrid>
    <Cuboid color="blue" offset={{ x: 0, y: 0, z: 0 }} size={[15, 10, 10]} />
  </JsCadFixture>
  </Example>
)
