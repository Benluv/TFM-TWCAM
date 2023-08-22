import React, { useRef } from "react";
import { OceanograficModel } from "../models/OceanograficModel";
import ModelMotion from "../helpers/ModelMotion";

export default function Oceanografic(props) {
  const group = useRef();
  return (
    <group ref={group} {...props} dispose={null}>
      <ModelMotion group={group} />
      <OceanograficModel scale={0.05} />
    </group>
  );
}