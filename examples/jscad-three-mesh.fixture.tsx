import { Canvas } from "@react-three/fiber";
import { OrbitControls } from '@react-three/drei'
import { JSCadThreeMesh } from "../lib/components/jscad-three-mesh";
import { Cube } from "../lib"

export default () => (
    <div style={{
        width: "100%",
        height: '100vh',
    }}>
        <Canvas>
            <JSCadThreeMesh>
                <Cube size={10} />
            </JSCadThreeMesh>
            <OrbitControls />
        </Canvas>
    </div>
)