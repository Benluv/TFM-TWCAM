import React, { useRef } from "react";
import { ArtsModel } from "../../xr-hit-model/ArtsModel";
import ModelMotion from "../helpers/ModelMotion";

export default function Arts(props) {
  const group = useRef();
  return (
    <group ref={group} {...props} dispose={null} 
    onDoubleClick={
        (e) => {
          e.stopPropagation();
          document.body.style.cursor = "pointer";
          console.log("Algo algo Arts")
          console.log(e)
        }}
    >
    <ModelMotion group={group} rotFactor={4}/>
    <ArtsModel scale={0.07} />
    </group>
  );
}