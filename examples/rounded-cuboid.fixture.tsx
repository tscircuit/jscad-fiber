import { ExampleWrapper } from "lib/components/Example-wrapper"
import { RoundedCuboid } from "../lib"
import { JsCadView } from "../lib/components/jscad-view"

export default () => (
  <ExampleWrapper fileName="rounded-cuboid.fixture.tsx">
    <JsCadView>
      <RoundedCuboid
        size={[15, 10, 10]}
        roundRadius={1}
        color="skyblue"
        center={[0, 0, 10]}
      />
    </JsCadView>
  </ExampleWrapper>
)
