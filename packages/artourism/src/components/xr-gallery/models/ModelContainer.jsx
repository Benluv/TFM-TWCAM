import { OrbitControls } from "@react-three/drei"
import { MestallaFinal } from "./Mestalla-solo-final"
import { Canvas } from "@react-three/fiber"

export const Model = () => {
    return (
        <>
            <Canvas>
                <OrbitControls />
                <ambientLight intensity={1.8} />
                <MestallaFinal />
            </Canvas>
        </>
    )
}

export default Model