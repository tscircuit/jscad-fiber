import { ExampleWrapper } from "lib/components/Example-wrapper"
import { CylinderElliptic } from "../lib"
import { JsCadView } from "../lib/components/jscad-view"

export default () => (
  <ExampleWrapper fileName="cone.fixture.tsx">
    <JsCadView wireframe>
      <CylinderElliptic
        height={5}
        startRadius={[2, 2]}
        endRadius={[0, 0]}
        segments={32}
        startAngle={0}
        endAngle={Math.PI * 2}
        color="green"
        center={[0, 5, 5]}
      />
    </JsCadView>
  </ExampleWrapper>
)
