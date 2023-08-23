import { GoogleMap, OverlayView, StreetViewPanorama } from '@react-google-maps/api'

export default function ModelPosToPan() {

    const containerStyle = {
        width: '400px',
        height: '400px'
      };

      
    const center = { 
        lat: 39.459485, 
        lng: -0.356148 
    }
    
    return (
        <GoogleMap center={center} containerStyle={containerStyle} zoom={10}>
            <StreetViewPanorama 
                id="street-view-panorama"
                position={center} 
                visible={true} 
            >
            <OverlayView />
            </StreetViewPanorama>
        </GoogleMap>
    )
}