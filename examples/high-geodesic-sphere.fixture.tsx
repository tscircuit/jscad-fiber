import { ExampleWrapper } from "lib/components/Example-wrapper"
import { GeodesicSphere } from "../lib"
import { JsCadView } from "../lib/components/jscad-view"

export default () => (
  <ExampleWrapper fileName="high-geodesic-sphere.fixture.tsx">
    <JsCadView wireframe>
      <GeodesicSphere
        radius={10}
        frequency={12}
        color="violet"
        center={[10, 5, 0]}
      />
    </JsCadView>
  </ExampleWrapper>
)
