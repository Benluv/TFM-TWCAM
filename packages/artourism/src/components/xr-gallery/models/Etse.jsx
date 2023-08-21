import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { EtseModel } from "../../xr-hit-model/EtseModel";

export default function Etse(props) {
  const group = useRef();
  return (
    <group ref={group} {...props} dispose={null}>
      <EtseModel scale={0.09} />
    </group>
  );
}