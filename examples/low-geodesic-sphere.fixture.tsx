import { ExampleWrapper } from "lib/components/Example-wrapper"
import { GeodesicSphere } from "../lib"
import { JsCadView } from "../lib/components/jscad-view"

export default () => (
  <ExampleWrapper>
    <JsCadView wireframe>
      <GeodesicSphere radius={10} frequency={6} />
    </JsCadView>
  </ExampleWrapper>
)
