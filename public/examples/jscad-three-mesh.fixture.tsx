import { cube, sphere } from "@jscad/modeling/src/primitives"
import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { useState } from "react"
import { Custom } from "lib"
import { JSCadThreeMesh } from "lib/components/jscad-three-mesh"

export default () => {
  const [solid, setSolid] = useState(cube({ size: 10 }))

  const setCube = () => {
    setSolid(cube({ size: 10 }))
  }

  const setSphere = () => {
    setSolid(sphere({ radius: 6, segments: 32 }))
  }

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
      }}
    >
      <button onClick={setCube} type="button">
        Cube
      </button>
      <button onClick={setSphere} type="button">
        Sphere
      </button>
      <Canvas>
        <JSCadThreeMesh>
          <Custom geometry={solid} />
        </JSCadThreeMesh>
        <OrbitControls />
      </Canvas>
    </div>
  )
}
