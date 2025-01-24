import { ExampleWrapper } from "lib/components/Example-wrapper"
import { Torus } from "lib"
import { JsCadView } from "lib/components/jscad-view"

export default () => (
  <ExampleWrapper fileName={import.meta.url}>
    <JsCadView wireframe>
      <Torus
        innerRadius={15}
        outerRadius={20}
        innerSegments={64}
        outerSegments={96}
        innerRotation={Math.PI}
        outerRotation={Math.PI / 2}
        startAngle={0}
      />
    </JsCadView>
  </ExampleWrapper>
)
