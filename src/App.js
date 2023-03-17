import './App.css';
import SearchBtn from './components/SearchTabs/SearchBtn';
import MapSearch from './components/MapTab/MapSearch';
import Navbar from './components/NavTab/Navbar';
import {useLoadScript} from '@react-google-maps/api';
import Map from './components/MapTab/Map'
import MyComponent from './components/MapTab/MapSearch';
import { useEffect, useState } from 'react';


function App() {
  // let APIKey = "f44cfcc45327fddc443fa6767211b14b";
  let APIKey = "31b1715eea27e8546c5192709d456eb7";

  const [long,setLong] = useState()
  const [lat,setLat] = useState()



  const [location, setLocation ] = useState("")
  // const [city,setCity] = useState()
  const FetchLocation = () => {
    fetch("https://api.openweathermap.org/geo/1.0/direct?q="+ location +"&limit=5&appid=" + APIKey)
      .then(response => {
        return response.json()
      })
      .then(data => {
        // setLocation("data")
        setLat(data[0].lat)
        setLong(data[0].lon)
        console.log(lat);
        console.log(long);

      })
  }
  useEffect(() => {
    FetchLocation()
  }, [location])

  
  const {isLoaded} = useLoadScript({googleMapsApiKey:'AIzaSyDiynoeYUWuZBp_4e29FZ4-JXPJHVz9olY', Libraries: ['places']})
  if (!isLoaded) {
    return <div> Loading....</div>
  }
  return (
    <div>
     <Navbar/>
     <SearchBtn setLocation={setLocation}/>
     <MyComponent location={location}/>
     {/* <FetchLocation location={location}/> */}
     <div>
      {/* <div id='map'><Map /></div> */}
      <div>
        {location}
      </div>
      

    </div>
    </div>
  );
}

export default App;
