import { withMaterialProp } from "../wrappers/with-material-prop"
export type RectangleProps = {
  size: [number, number]
  /** Identity preserved in a headless JSCAD plan. */
  name?: string
  /** Construction rectangle: omitted from solid rendering and export. */
  reference?: boolean
}

function RectangleBase({ size, name, reference }: RectangleProps) {
  return <rectangle size={size} name={name} reference={reference} />
}

export const Rectangle = withMaterialProp(RectangleBase)
