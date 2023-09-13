import { useLocation } from 'react-router-dom';
import PanoramaLoc from './PanoramaLoc';

export default function ModelPosToPanWrapper() {
    const location = useLocation();
    const { lat, lng } = location.state || {}; // Access lat and lng from state
  
    return <PanoramaLoc lat={lat} lng={lng} />;
  }