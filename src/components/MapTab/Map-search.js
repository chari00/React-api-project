import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import SearchBtn from '../SearchTabs/SearchBtn';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: 51.509865,
  lng: -0.118092
};

function MyComponent({location}) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyAZRcYKLV62ZfdF-kad90u8lmuvdIwYxu8"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <div>{console.log(location)}
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
      </div>
  ) : <></>
}

export default MyComponent