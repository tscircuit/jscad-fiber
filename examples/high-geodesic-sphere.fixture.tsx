import { designCodeHighGeodesicsphere } from "src/designCode"
import Example from "src/Example"
import { GeodesicSphere } from "../lib"
import { JsCadFixture } from "../lib/components/jscad-fixture"

export default () => (
<Example designCode={designCodeHighGeodesicsphere}>
  <JsCadFixture wireframe>
    <GeodesicSphere
      radius={10}
      frequency={12}
      color="violet"
      center={[10, 5, 0]}
    />
  </JsCadFixture>
</Example>
)
