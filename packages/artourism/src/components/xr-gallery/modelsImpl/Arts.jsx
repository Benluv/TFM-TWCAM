import React, { useRef, useState } from "react";
import { ArtsModel } from "../models/ArtsModel";
import ModelMotion from "../helpers/ModelMotion";
import { Interactive } from "@react-three/xr";
import { useLoadScript } from "@react-google-maps/api";
import { useNavigate } from "react-router-dom";

export default function Arts(props) {
  const GOOGLE_API_KEY = ""
  const group = useRef();
  const navigate = useNavigate();
  const [ libraries ] = useState(['places']);
  const { isLoaded, loadError } = useLoadScript({
    id: 'google-map-script',
    googleMapsApiKey: GOOGLE_API_KEY,
    libraries,
})

  const lat = 39.459485;
  const lng = -0.356148;

  const selectModel = (e) => {
    {isLoaded ? (navigate("/panorama", { state: {lat, lng} })) : console.log(loadError)}
    {loadError ? console.log(loadError) : console.log("loaded")}
    // const position = e.intersection.object.position
    // const { x, y, z } = e.object.position=
  }

  return (
    <group ref={group} {...props} dispose={null} onDoubleClick={selectModel}> 
    <ModelMotion group={group} />
    <Interactive onSelect={selectModel}>
      <ArtsModel scale={0.07} />
    </Interactive>
    </group>
  );
}