export type CylinderProps = {
  radius: number
  height: number
}

export function Cylinder({ radius, height }: CylinderProps) {
  return <cylinder radius={radius} height={height} />
}