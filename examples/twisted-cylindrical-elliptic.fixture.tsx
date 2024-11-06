import { designCodeTwistedCylinderElliptic } from "src/designCode";
import Example from "src/Example";
import { CylinderElliptic } from "../lib";
import { JsCadFixture } from "../lib/components/jscad-fixture";

export default () => (
  <Example designCode={designCodeTwistedCylinderElliptic}>
    <JsCadFixture wireframe>
      <CylinderElliptic
        height={6}
        startRadius={[1, 1.5]}
        endRadius={[1.5, 1]}
        segments={64}
        startAngle={0}
        endAngle={Math.PI * 2}
      />
    </JsCadFixture>
  </Example>
);
