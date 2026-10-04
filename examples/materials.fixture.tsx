import { Cube, JsCadView, Sphere, Subtract } from "../lib"

export default () => (
  <JsCadView>
    <Subtract material={{ color: "silver", metalness: 1, roughness: 0.2 }}>
      <Cube size={10} />
      <Sphere radius={6} />
    </Subtract>
    <Sphere
      radius={4}
      center={[15, 0, 0]}
      material={{ color: "royalblue", roughness: 0.7, opacity: 0.5 }}
    />
  </JsCadView>
)
