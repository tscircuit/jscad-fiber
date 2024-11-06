import { booleans, primitives } from "@jscad/modeling";
import { designCodeCustom } from "src/designCode";
import Example from "src/Example";
import { Custom } from "../lib";
import { JsCadFixture } from "../lib/components/jscad-fixture";

const cube = primitives.cube({ size: 10 })
const sphere = primitives.sphere({ radius: 6, segments: 32 })

const intersected = booleans.subtract(cube, sphere)

export default () => (
    <Example designCode={designCodeCustom}>
  <JsCadFixture>
    <Custom geometry={intersected} />
  </JsCadFixture>
  </Example>
)
