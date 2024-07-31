export type CircleProps = {
  radius: number
}

export function Circle({ radius }: CircleProps) {
  return <circle radius={radius} />
}