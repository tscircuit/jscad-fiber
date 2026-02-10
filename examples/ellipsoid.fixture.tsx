import { Ellipsoid } from "../lib"
import { ExampleWrapper } from "../lib/components/Example-wrapper"
import { JsCadView } from "../lib/components/jscad-view"

export default () => (
  <ExampleWrapper fileName={import.meta.url}>
    <JsCadView wireframe>
      <Ellipsoid radius={[15, 10, 10]} color="brown" center={[0, 0, 10]} />
    </JsCadView>
  </ExampleWrapper>
)
