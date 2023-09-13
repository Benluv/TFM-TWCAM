import React, { useRef, useState } from "react";
import { MestallaFinal } from "../models/Mestalla-solo-final";
import ModelMotion from "../helpers/ModelMotion";
import { useLoadScript } from "@react-google-maps/api";
import { useNavigate } from "react-router-dom";


export default function Mestalla(props) {
  const GOOGLE_API_KEY = "AIzaSyAMxhZxsOG_lcvnfYVJrCUQDOCMrkK7q_E"
  const group = useRef();
  const navigate = useNavigate();
  const [ libraries ] = useState(['places']);
  const { isLoaded, loadError } = useLoadScript({
    id: 'google-map-script',
    googleMapsApiKey: GOOGLE_API_KEY,
    libraries,
})

  const lat = 39.475295;
  const lng = -0.358980;

  const selectModel = (e) => {
    {isLoaded ? (navigate("/panorama", { state: {lat, lng} })) : console.log(loadError)}
    {loadError ? console.log(loadError) : console.log("loaded")}
  }

  return (
    <group ref={group} {...props} dispose={null} onDoubleClick={selectModel}>
      <ModelMotion group={group} rotFactor={10}/>
      <MestallaFinal scale={0.23} />
    </group>
  );
}