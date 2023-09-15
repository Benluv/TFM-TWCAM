import React, { useRef, useState } from "react";
import { EtseModel } from "../models/EtseModel";
import ModelMotion from "../helpers/ModelMotion";
import { useLoadScript } from "@react-google-maps/api";
import { useNavigate } from "react-router-dom";

export default function Etse(props) {
  const GOOGLE_API_KEY = ""
  const group = useRef();
  const navigate = useNavigate();
  const [ libraries ] = useState(['places']);
  const { isLoaded, loadError } = useLoadScript({
    id: 'google-map-script',
    googleMapsApiKey: GOOGLE_API_KEY,
    libraries,
})
  const lat = 39.512290;
  const lng = -0.424717;

  const selectModel = (e) => {
    {isLoaded ? (navigate("/panorama", { state: {lat, lng} })) : console.log(loadError)}
    {loadError ? console.log(loadError) : console.log("loaded")}
  }

  return (
    <group ref={group} {...props} dispose={null} onDoubleClick={selectModel}>
      <ModelMotion group={group} />
      <EtseModel scale={0.07} />
    </group>
  );
}