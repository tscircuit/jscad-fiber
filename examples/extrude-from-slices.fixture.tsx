import { ExampleWrapper } from "../lib/components/Example-wrapper"
import { ExtrudeFromSlices } from "../lib"
import { JsCadView } from "../lib/components/jscad-view"
import jscad from "@jscad/modeling"

const { bezier } = jscad.curves
const { circle, line, polygon, rectangle, roundedRectangle, star } =
  jscad.primitives
const { extrudeLinear, extrudeRotate, extrudeFromSlices, slice } =
  jscad.extrusions
const { mat4 } = jscad.maths

const baseSlice = slice.fromPoints([
  [2, 2],
  [-2, 2],
  [-2, -2],
  [2, -2],
])

const xCurve = bezier.create([1, 1.8, 0.4, 1])
const yCurve = bezier.create([1, 1.8, 0.5])

export default () => (
  <ExampleWrapper fileName={import.meta.url}>
    <JsCadView zAxisUp showGrid>
      <ExtrudeFromSlices
        numberOfSlices={10}
        capStart={true}
        capEnd={true}
        close={true}
        repair={true}
        baseSlice={baseSlice}
        callback={function (progress, count, base) {
          let newslice = slice.transform(
            mat4.fromTranslation(mat4.create(), [0, 0, 10 * progress]),
            baseSlice,
          )
          newslice = slice.transform(
            mat4.fromScaling(mat4.create(), [
              bezier.valueAt(progress, xCurve) as any,
              bezier.valueAt(progress, yCurve) as any,
              1,
            ]),
            newslice,
          )

          // Rotate the slice 90 degrees along the path
          const rotationAngle = (Math.PI / 2) * progress // 90 degrees in radians
          newslice = slice.transform(
            mat4.fromXRotation(mat4.create(), rotationAngle),
            newslice,
          )

          return newslice
        }}
      />
    </JsCadView>
  </ExampleWrapper>
)
