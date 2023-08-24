import { GoogleMap, InfoWindow, LoadScript, Marker, StreetViewPanorama } from '@react-google-maps/api'

export default function ModelPosToPan() {
    const lib = ["places"]
    console.log("ModelPosToPan")
    const containerStyle = {
        width: '100%',
        height: '100%'
      };

      
    // process.env.REACT_APP_GOOGLE_MAPS_API_KEY = AIzaSyD6Qp0RbqanA6iZqaPf7dzN4RqoG58iVLE
    //set "REACT_APP_GOOGLE_MAPS_API_KEY=AIzaSyD6Qp0RbqanA6iZqaPf7dzN4RqoG58iVLE" && npm start
//     <LoadScript googleMapsApiKey={"AIzaSyD6Qp0RbqanA6iZqaPf7dzN4RqoG58iVLE"} libraries={lib}>
//     <ModelPosToPan />
//   </LoadScript>

    const turia = { 
        lat: 39.459485, 
        lng: -0.356148 
    }

    const onPanoramaLoad = ({streetView}) => {
        console.log({streetView})
        console.log("Street View Panorama loaded")
    }

    // Make a street view with react-google-maps
    return (
        <LoadScript googleMapsApiKey={"AIzaSyD6Qp0RbqanA6iZqaPf7dzN4RqoG58iVLE"}>
        <GoogleMap center={turia} containerStyle={containerStyle} zoom={10} id='map'>
            <Marker position={turia} />
                <InfoWindow>
                <div>Your marker info content here</div>
                </InfoWindow>
            <StreetViewPanorama onLoad={onPanoramaLoad}
                position={turia}
                visible={true}
            />
        </GoogleMap>
        </LoadScript>
    )
}