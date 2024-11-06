import { designCodeCustomSphere } from "src/designCode";
import Example from "src/Example";
import { Sphere } from "../lib";
import { JsCadFixture } from "../lib/components/jscad-fixture";

export default () => (
  <Example designCode={designCodeCustomSphere}>
  <JsCadFixture wireframe>
    <Sphere radius={10} segments={64} />
  </JsCadFixture>
  </Example>
)
