import React, { useRef } from "react";
import { EtseModel } from "../models/EtseModel";
import ModelMotion from "../helpers/ModelMotion";

export default function Etse(props) {
  const group = useRef();
  return (
    <group ref={group} {...props} dispose={null}>
      <ModelMotion group={group} />
      <EtseModel scale={0.08} />
    </group>
  );
}