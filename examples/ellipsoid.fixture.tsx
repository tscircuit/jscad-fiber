import { ExampleWrapper } from "lib/components/Example-wrapper"
import { Ellipsoid } from "../lib"
import { JsCadView } from "../lib/components/jscad-view"

export default () => (
  <ExampleWrapper>
    <JsCadView wireframe>
      <Ellipsoid radius={[15, 10, 10]} color="brown" center={[0, 0, 10]} />
    </JsCadView>
  </ExampleWrapper>
)
