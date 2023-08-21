import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { OceanograficModel } from "../../xr-hit-model/OceanograficModel";

export default function Oceanografic(props) {
  const group = useRef();
  return (
    <group ref={group} {...props} dispose={null}>
      <OceanograficModel scale={0.09} />
    </group>
  );
}