import React, { useRef } from "react";
import { ParcCientificModel } from "../../xr-hit-model/ParcCientificModel";
import { useFrame } from "@react-three/fiber";
import { useXR } from "@react-three/xr";
import ModelMotion from "../helpers/ModelMotion";

export default function ParcCientific(props) {
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
      <ParcCientificModel scale={0.07} />
    </group>
  );
}