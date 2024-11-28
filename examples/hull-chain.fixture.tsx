import { ExampleWrapper } from "lib/components/Example-wrapper"
import { Cuboid, Ellipsoid, HullChain } from "../lib"
import { JsCadView } from "../lib/components/jscad-view"

export default () => (
  <ExampleWrapper fileName={import.meta.url}>
    <JsCadView>
      <HullChain color="lightgreen" center={[0, 0, -10]}>
        <Cuboid size={[10, 10, 10]} />
        <Ellipsoid radius={[10, 10, 12]} center={[0, 0, 10]} />
        <Cuboid size={[10, 10, 10]} center={[0, 0, 20]} />
      </HullChain>
    </JsCadView>
  </ExampleWrapper>
)
