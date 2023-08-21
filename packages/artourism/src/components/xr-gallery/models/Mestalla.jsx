import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { MestallaFinal } from "../../xr-hit-model/Mestalla-solo-final";

export default function Mestalla(props) {
  const group = useRef();
  return (
    <group ref={group} {...props} dispose={null}>
      <MestallaFinal scale={0.25} />
    </group>
  );
}