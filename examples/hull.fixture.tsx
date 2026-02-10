import { Cuboid, Ellipsoid, Hull, Translate } from "../lib"
import { ExampleWrapper } from "../lib/components/Example-wrapper"
import { JsCadView } from "../lib/components/jscad-view"

export default () => (
  <ExampleWrapper fileName={import.meta.url}>
    <JsCadView>
      <Hull color="lightblue" center={[0, -5, -10]}>
        <Cuboid size={[10, 10, 10]} />
        <Ellipsoid radius={[10, 10, 10]} center={[0, 0, 15]} />
      </Hull>
    </JsCadView>
  </ExampleWrapper>
)
