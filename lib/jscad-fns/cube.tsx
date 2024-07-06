// Define prop types for our components
export interface CubeProps {
  size: number | [number, number, number]
}

// Example usage
export function Cube({ size }: CubeProps) {
  return <cube size={size} />
}
