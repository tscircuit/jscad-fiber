import { GeodesicSphere } from "../lib"
import { JsCadFixture } from "../lib/components/jscad-fixture"

export default () => (
  <JsCadFixture wireframe>
    <GeodesicSphere radius={10} frequency={6} />
  </JsCadFixture>
)
