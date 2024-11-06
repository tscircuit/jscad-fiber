import { designCodeCircle } from "src/designCode";
import Example from "src/Example";
import { Circle } from "../lib";
import { JsCadFixture } from "../lib/components/jscad-fixture";


export default () => (
  <Example designCode={designCodeCircle}>
  <JsCadFixture>
    <Circle radius={10} />
  </JsCadFixture>
  </Example>
)
