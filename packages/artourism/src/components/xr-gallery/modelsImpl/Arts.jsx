import React, { useRef } from "react";
import { ArtsModel } from "../models/ArtsModel";
import ModelMotion from "../helpers/ModelMotion";
import { Interactive } from "@react-three/xr";
import ModelPosToPan from "../helpers/ModelPosToPan";
import { useLoadScript } from "@react-google-maps/api";

export default function Arts(props) {
  const group = useRef();

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyD6Qp0RbqanA6iZqaPf7dzN4RqoG58iVLE",
})
  
  const selectModel = (e) => {
    <ModelPosToPan />
    console.log(e.intersection.object.position)
  }

  return (
    <group ref={group} {...props} dispose={null} 
    onDoubleClick={
        (e) => {
          {isLoaded ? (<ModelPosToPan />) : console.log(loadError)}
          {loadError ? console.log(loadError) : console.log("loaded")}
          e.stopPropagation();
          document.body.style.cursor = "pointer";
          const { x, y, z } = e.object.position
          console.log(x, y, z)
        }}
    >
    <ModelMotion group={group} />
    <Interactive onSelect={selectModel}>
      <ArtsModel scale={0.07} />
    </Interactive>
    </group>
  );
}

//OBJECT POSITION
// Vector3 {x: -3.747, y: -0.641, z: 2.396}
//STREET VIEW 
//39.459485, -0.356148