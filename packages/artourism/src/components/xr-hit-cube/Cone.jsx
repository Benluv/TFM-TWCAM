import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { useXR } from "@react-three/xr";

const Cone = ({ position }) => {
    const coneRef = useRef();

    const { isPresenting } = useXR()

    useFrame((state, delta) => {
        if (!isPresenting) {
            coneRef.current.rotation.y += delta/2.8
            coneRef.current.rotation.x = 0.5;
        }
    })

    return (
        <>
            <mesh ref={coneRef} position={position}>
                <coneGeometry args={[ 1, 2, 15 ]}/>
                <meshStandardMaterial color="red" />
            </mesh>
        </>
    )
}

export default Cone