import React, { useRef } from "react";
import { MestallaFinal } from "../../xr-hit-model/Mestalla-solo-final";
import { useFrame } from "@react-three/fiber";
import { useXR } from "@react-three/xr";
import ModelMotion from "../helpers/ModelMotion";


export default function Mestalla(props) {
  const group = useRef();
  const { isPresenting } = useXR();
  useFrame((state, delta) => {
  if(!isPresenting) {
    group.current.rotation.y += delta/2.8;
    group.current.rotation.x = 0.5;
  }
  });
  return (
    <group ref={group} {...props} dispose={null}>
      <ModelMotion group={group} />
      <MestallaFinal scale={0.23} />
    </group>
  );
}