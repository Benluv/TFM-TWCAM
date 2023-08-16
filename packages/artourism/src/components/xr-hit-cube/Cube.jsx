import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { useXR } from "@react-three/xr";

const Cube = ({ position }) => {
  const cubeRef = useRef();
  
  const { isPresenting } = useXR();

  useFrame((state, delta) => {
    if(!isPresenting) {
      cubeRef.current.rotation.y += delta/2.8;
      cubeRef.current.rotation.x = 0.5;
    }
    
  });

  return (
    <>
      <mesh ref={cubeRef} position={position}>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshStandardMaterial color="mediumpurple" />
      </mesh>
    </>
  );
};

export default Cube;
