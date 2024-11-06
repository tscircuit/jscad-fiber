import { designCodeGeodesicSphere } from "src/designCode"
import Example from "src/Example"
import { GeodesicSphere } from "../lib"
import { JsCadFixture } from "../lib/components/jscad-fixture"

export default () => (
  <Example designCode={designCodeGeodesicSphere}>
  <JsCadFixture wireframe>
    <GeodesicSphere radius={10} frequency={6} />
  </JsCadFixture>
  </Example>
)
