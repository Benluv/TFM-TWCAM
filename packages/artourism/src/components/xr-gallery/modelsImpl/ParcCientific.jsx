import React, { useRef } from "react";
import { ParcCientificModel } from "../models/ParcCientificModel";
import ModelMotion from "../helpers/ModelMotion";

export default function ParcCientific(props) {
  const group = useRef();
  return (
    <group ref={group} {...props} dispose={null}>
      <ModelMotion group={group} />
      <ParcCientificModel scale={0.07} />
    </group>
  );
}