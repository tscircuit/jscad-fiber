import { withColorProp } from "lib/wrappers/with-color-prop"
import { withOffsetProp } from "lib/wrappers/with-offset-prop"
import type { Point3 } from "./translate"

export type Slice = {
  edges: Array<[Point3, Point3]>
}

export type ExtrudeFromSlicesProps = {
  numberOfSlices?: number
  capStart?: boolean
  capEnd?: boolean
  close?: boolean
  repair?: boolean
  baseSlice: Slice
  callback?: (progress: number, count: number, base: Slice) => Slice
}

const ExtrudeFromSlicesBase = ({
  numberOfSlices,
  capStart,
  capEnd,
  close,
  repair,
  baseSlice,
  callback,
}: ExtrudeFromSlicesProps) => {
  return (
    <extrudeFromSlices
      numberOfSlices={numberOfSlices}
      capStart={capStart}
      capEnd={capEnd}
      close={close}
      repair={repair}
      baseSlice={baseSlice}
      callback={callback}
    ></extrudeFromSlices>
  )
}

export const ExtrudeFromSlices = withOffsetProp(
  withColorProp(ExtrudeFromSlicesBase),
)
