import Example from "src/Example";
import { Cuboid } from "../lib";
import { JsCadFixture } from "../lib/components/jscad-fixture";
import { Translate } from "../lib/jscad-fns";

export default () => (
  <Example>
    <JsCadFixture>
      <Cuboid size={[20, 10, 10]} />
      <Cuboid center={[0, 0, 15]} size={[15, 10, 15]} color="red" />
      <Translate offset={[0, 0, -15]}>
        <Cuboid size={[15, 10, 15]} color="blue" />
        <Cuboid size={[5, 25, 5]} color="white" />
      </Translate>
      <Translate offset={[0, 15, 0]}>
        <Translate offset={[0, 0, -15]}>
          <Cuboid size={[3, 3, 3]} color="green" />
          <Cuboid size={[4, 2, 4]} color="white" />
          <Cuboid size={[5, 1, 5]} color="red" />
          <Translate offset={[0, 0, -10]}>
            <Cuboid size={[3, 3, 3]} color="blue" />
            <Cuboid size={[4, 2, 4]} color="white" />
            <Cuboid size={[5, 1, 5]} color="red" />
          </Translate>
        </Translate>
      </Translate>
    </JsCadFixture>
  </Example>
);
