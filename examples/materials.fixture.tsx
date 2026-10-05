import { JsCadView, jscad as p } from "../lib"

export default () => (
  <JsCadView>
    <p.material color="silver" metalness={1} roughness={0.2}>
      <p.subtract>
        <p.cube size={10} />
        <p.sphere radius={6} />
      </p.subtract>
    </p.material>
    <p.sphere
      radius={4}
      center={[15, 0, 0]}
      material={{ color: "royalblue", roughness: 0.7, opacity: 0.5 }}
    />
  </JsCadView>
)
