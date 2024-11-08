import { CylinderElliptic } from "../lib"
import { JsCadView } from "../lib/components/jscad-view"
import { ExampleWrapper } from "lib/components/Example-wrapper"

export default () => (
  <ExampleWrapper>
    <JsCadView wireframe>
      <CylinderElliptic
        height={6}
        startRadius={[1, 1.5]}
        endRadius={[1.5, 1]}
        segments={64}
        startAngle={0}
        endAngle={Math.PI * 2}
      />
    </JsCadView>
  </ExampleWrapper>
)
