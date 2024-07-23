import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Cube } from "../lib"
import { JSCadThreeMesh } from "../lib/components/jscad-three-mesh"

export default () => (
  <div
    style={{
      width: "100%",
      height: "100vh",
    }}
  >
    <Canvas>
      <JSCadThreeMesh>
        <Cube size={10} />
      </JSCadThreeMesh>
      <OrbitControls />
    </Canvas>
  </div>
)
