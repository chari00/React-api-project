import './App.css';
import SearchBtn from './components/SearchTabs/SearchBtn';
import Navbar from './components/NavTab/Navbar';
import {useLoadScript} from '@react-google-maps/api';
import Map from './components/MapTab/Map'

function App() {
  const {isLoaded} = useLoadScript({googleMapsApiKey:'AIzaSyDiynoeYUWuZBp_4e29FZ4-JXPJHVz9olY', Libraries: ['places']})
  if (!isLoaded) {
    return <div> Loading....</div>
  }
  return (
    <div>
     <Navbar/>
     <SearchBtn/>
     <div>
      <div id='map'><Map/></div>
      

    </div>
    </div>
  );
}

export default App;
