import React, { useRef } from "react";
import { MestallaFinal } from "../models/Mestalla-solo-final";
import ModelMotion from "../helpers/ModelMotion";


export default function Mestalla(props) {
  const group = useRef();
  return (
    <group ref={group} {...props} dispose={null}>
      <ModelMotion group={group} rotFactor={10}/>
      <MestallaFinal scale={0.23} />
    </group>
  );
}