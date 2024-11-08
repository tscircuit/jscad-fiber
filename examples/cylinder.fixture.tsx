import { ExampleWrapper } from "lib/components/Example-wrapper"
import { Cylinder } from "../lib"
import { JsCadView } from "../lib/components/jscad-view"

export default () => (
  <ExampleWrapper>
    <JsCadView showGrid zAxisUp>
      <Cylinder
        radius={5}
        height={10}
        color="#F7E8AA"
        center={[-20, 0, 0]}
        rotation={["90deg", 0, 0]}
      />
      <Cylinder radius={5} height={10} color="#F7E8AA" center={[20, 0, 0]} />
    </JsCadView>
  </ExampleWrapper>
)
