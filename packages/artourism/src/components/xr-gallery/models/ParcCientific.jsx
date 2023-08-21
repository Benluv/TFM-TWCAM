import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { ParcCientificModel } from "../../xr-hit-model/ParcCientificModel";

export default function ParcCientific(props) {
  const group = useRef();
  return (
    <group ref={group} {...props} dispose={null}>
      <ParcCientificModel scale={0.09} />
    </group>
  );
}