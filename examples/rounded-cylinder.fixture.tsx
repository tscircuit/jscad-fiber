import { ExampleWrapper } from "lib/components/Example-wrapper"
import { RoundedCylinder } from "../lib"
import { JsCadView } from "../lib/components/jscad-view"

export default () => (
  <ExampleWrapper>
    <JsCadView wireframe>
      <RoundedCylinder
        radius={10}
        height={20}
        roundRadius={5}
        color="#4B0082"
        center={[0, 0, 10]}
      />
    </JsCadView>
  </ExampleWrapper>
)
