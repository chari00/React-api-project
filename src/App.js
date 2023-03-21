import './App.css';
import { useState, useEffect } from 'react';


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

  
 
  return (
    <div>
     
     <div>
      

    </div>
    </div>
  );
}

export default App;
