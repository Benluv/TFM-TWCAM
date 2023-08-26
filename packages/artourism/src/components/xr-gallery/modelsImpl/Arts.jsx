import React, { useRef, useState } from "react";
import { ArtsModel } from "../models/ArtsModel";
import ModelMotion from "../helpers/ModelMotion";
import { Interactive } from "@react-three/xr";
import { useLoadScript } from "@react-google-maps/api";
import { useNavigate } from "react-router-dom";

export default function Arts(props) {
  const GOOGLE_API_KEY = "AIzaSyD6Qp0RbqanA6iZqaPf7dzN4RqoG58iVLE"
  const group = useRef();
  const navigate = useNavigate();
  const [ libraries ] = useState(['places']);
  const { isLoaded, loadError } = useLoadScript({
    id: 'google-map-script',
    googleMapsApiKey: GOOGLE_API_KEY,
    libraries,
})
  
  const selectModel = (e) => {

    {isLoaded ? (navigate("/panorama")) : console.log(loadError)}
    {loadError ? console.log(loadError) : console.log("loaded")}
    const position = e.intersection.object.position
    // const { x, y, z } = e.object.position
    console.log(position)
  }

  return (
    <group ref={group} {...props} dispose={null} onDoubleClick={
      (e) => {
        {isLoaded ? (navigate("/panorama")) : console.log(loadError)}
        {loadError ? console.log(loadError) : console.log("loaded")}
      }
    }> 
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