import { OrbitControls } from "@react-three/drei"
import { Mestalla } from "./Mestalla-solo"
import { Canvas } from "@react-three/fiber"

export const Model = () => {
    return (
        <>
            <Canvas>
                <OrbitControls />
                <ambientLight intensity={1.8} />
                <Mestalla />
            </Canvas>
        </>
    )
}

export default Model