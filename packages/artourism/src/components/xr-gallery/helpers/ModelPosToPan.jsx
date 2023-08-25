import React from "react";
import { GoogleMap, StreetViewPanorama } from "@react-google-maps/api";

function ModelPosToPan() {
    const containerStyle = {
        width: "100vw",
        height: "100vh",
    };
    
    const turia = {
        lat: 39.459485,
        lng: -0.356148,
    };
    
    return (
        <>
        <GoogleMap mapContainerStyle={containerStyle} center={turia} zoom={10}>
            <StreetViewPanorama
            position={turia}
            visible={true}
            />
        </GoogleMap>
        </>
    );
}

export default ModelPosToPan;
