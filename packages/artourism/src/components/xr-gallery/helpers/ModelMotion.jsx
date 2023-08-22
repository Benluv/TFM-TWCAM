import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useXR } from "@react-three/xr";

export default function ModelMotion(props) {
    const { group, rotFactor } = props;
    const { isPresenting } = useXR();
    const rot = rotFactor || 200;

    useFrame((state, delta) => {
    if(!isPresenting) {
      group.current.rotation.y += delta/rot;
      group.current.rotation.x = 0.5;
      group.current.scale.set(5, 5, 5)
    }
    });
}