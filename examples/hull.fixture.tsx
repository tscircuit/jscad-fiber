import Example from "src/Example";
import { Cuboid, Ellipsoid, Hull } from "../lib";
import { JsCadFixture } from "../lib/components/jscad-fixture";

export default () => (
  <Example>
    <JsCadFixture>
      <Hull color="lightblue" center={[0, -5, -10]}>
        <Cuboid size={[10, 10, 10]} />
        <Ellipsoid radius={[10, 10, 10]} center={[0, 0, 15]} />
      </Hull>
    </JsCadFixture>
  </Example>
);
