import Example from "src/Example";
import { Rectangle } from "../lib";
import { JsCadFixture } from "../lib/components/jscad-fixture";

export default () => (
  <Example>
    <JsCadFixture>
      <Rectangle size={[10, 20]} />
    </JsCadFixture>
  </Example>
);
