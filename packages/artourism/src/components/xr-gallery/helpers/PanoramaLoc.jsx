import React, { Suspense } from "react";
import { GoogleMap, StreetViewPanorama } from "@react-google-maps/api";

function ModelPosToPan({ lat, lng }) {
    const containerStyle = { width: "100vw", height: "100vh",};
    if(!lat || !lng) return (<>
    </>)
    const center = {lat: lat, lng: lng };
    console.log ("lat", lat, "lng", lng)
    return (
        <>
        <Suspense fallback={<div>Loading...</div>}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
            <StreetViewPanorama
            position={center}
            visible={true}
            />
        </GoogleMap>
        </Suspense>
        </>
    );
}

export default ModelPosToPan;
