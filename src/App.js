import './App.css';
import SearchBtn from './components/SearchTabs/SearchBtn';
import Navbar from './components/NavTab/Navbar';
import {useLoadScript} from '@react-google-maps/api';
import MapSearch from './components/MapTab/MapSearch';
import { useState } from 'react';


function App() {
  const [location, setLocation ] = useState()
  const {isLoaded} = useLoadScript({googleMapsApiKey:'AIzaSyDiynoeYUWuZBp_4e29FZ4-JXPJHVz9olY', Libraries: ['places']})
  if (!isLoaded) {
    return <div> Loading....</div>
  }
  return (
    <div>
     <Navbar/>
     <SearchBtn setLocation={setLocation}/>
     <MapSearch location={location}/>
     <div>
      

    </div>
    </div>
  );
}

export default App;
