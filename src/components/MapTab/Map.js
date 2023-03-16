import { useMemo } from "react";
import {
  GoogleMap,
  
} from "@react-google-maps/api";
import '../MapTab/map.css'

export default function Map() {
  const center = useMemo(() => ({ lat: 51, lng: 0 }), []);
 
  return (
    <div className="container">
      <div className="controls">
        <h3>Map</h3>
      </div>
      <div className="map">
        <GoogleMap
          zoom={8}
          center={ center }
          mapContainerClassName="map-container"
        ></GoogleMap>
      </div>
    </div>
  );
}
