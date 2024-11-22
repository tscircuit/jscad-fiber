import { ExampleWrapper } from "lib/components/Example-wrapper"
import { Torus } from "../lib"
import { JsCadView } from "../lib/components/jscad-view"

export default () => (
  <ExampleWrapper fileName="torus.fixture.tsx">
    <JsCadView wireframe>
      <Torus
        innerRadius={1}
        outerRadius={1.2}
        color="red"
        center={[0, 10, 0]}
      />
    </JsCadView>
  </ExampleWrapper>
)
