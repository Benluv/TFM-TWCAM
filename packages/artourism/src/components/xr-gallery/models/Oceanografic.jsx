import React, { useRef } from "react";
import { OceanograficModel } from "../../xr-hit-model/OceanograficModel";
import { useFrame } from "@react-three/fiber";
import { useXR } from "@react-three/xr";
import ModelMotion from "../helpers/ModelMotion";

export default function Oceanografic(props) {
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
      <OceanograficModel scale={0.05} />
    </group>
  );
}