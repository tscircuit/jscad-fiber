import { designCodeCylinder } from "src/designCode";
import Example from "src/Example";
import { Cylinder } from "../lib";
import { JsCadFixture } from "../lib/components/jscad-fixture";

export default () => (
  <Example designCode={designCodeCylinder}>
  <JsCadFixture showGrid zAxisUp>
    <Cylinder
      radius={5}
      height={10}
      color="#F7E8AA"
      center={[-20, 0, 0]}
      rotation={["90deg", 0, 0]}
    />
    <Cylinder radius={5} height={10} color="#F7E8AA" center={[20, 0, 0]} />
  </JsCadFixture>
  </Example>
)
