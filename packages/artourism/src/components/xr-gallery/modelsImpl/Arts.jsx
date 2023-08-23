import React, { useRef } from "react";
import { ArtsModel } from "../models/ArtsModel";
import ModelMotion from "../helpers/ModelMotion";
import { Interactive, VRButton } from "@react-three/xr";
import { LoadScript } from "@react-google-maps/api";
import ModelPosToPan from "../helpers/ModelPosToPan";

export default function Arts(props) {
  const group = useRef();
  const lib = ["places"]
  
  const selectModel = (e) => {
    // process.env.REACT_APP_GOOGLE_MAPS_API_KEY = AIzaSyD6Qp0RbqanA6iZqaPf7dzN4RqoG58iVLE
    //set "REACT_APP_GOOGLE_MAPS_API_KEY=AIzaSyD6Qp0RbqanA6iZqaPf7dzN4RqoG58iVLE" && npm start
    <LoadScript googleMapsApiKey={"AIzaSyD6Qp0RbqanA6iZqaPf7dzN4RqoG58iVLE"} libraries={lib}>
      <ModelPosToPan />
    </LoadScript>
    console.log(e.intersection.object.position)
  }

  return (
    <group ref={group} {...props} dispose={null} 
    onDoubleClick={
        (e) => {
          <LoadScript googleMapsApiKey={"AIzaSyD6Qp0RbqanA6iZqaPf7dzN4RqoG58iVLE"} libraries={lib}>
            <ModelPosToPan />
          </LoadScript>
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