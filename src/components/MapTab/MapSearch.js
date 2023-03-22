import React, { useState, useEffect } from 'react';
import "../../App.css"
import moment from 'moment';

export default function GeoLoc() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [cinemas, setCinemas] = useState([]);
  const [cinemas2, setCinemas2] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);

  const [locationName, setLocationName] = useState("");
  const [long, setLong] = useState()
  const [lat, setLat] = useState()

  let APIKey = "9fa5cf36a9acadbab2060f9ac54c5a80";




  // fetching location


  const FetchLocation = () => {
    fetch("https://api.openweathermap.org/geo/1.0/direct?q=" + locationName + "&limit=1&appid=" + APIKey)
      .then(response => {
        return response.json()

      })
      .then(data => {
        for (let i = 0; i < data.length; i++) {
          if (data[i].country === "GB") {
            console.log(data[i])
            setLat(data[i].lat)
            setLong(data[i].lon)

            return

          }
          else {
            return console.log("Please enter a valid UK location name")
          }
        }
      })
  }




  useEffect(() => {
    FetchLocation()
  }, [locationName])

  // client:	BOOT_5
  // x-api-key:	l6k9ke23Cyzrl6p38OP3a9vUPQyFmT032fbgx7Kf
  // authorization:	Basic Qk9PVF81OmdFb2h6SkdqM3NwSg==
  // territory:	UK
  // api-version:	v200
  // geolocation:	Your location in format lat;lng, e.g. 52.47;-1.93
  // device-datetime:	yyyy-mm-ddThh:mm:ss.sssZ (ISO 8601 format, e.g. 2018-09-14T08:30:17.360Z)
  useEffect(() => {
    const fetchCinemasLocal = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`https://api-gate2.movieglu.com/cinemasNearby/?n=1`, {
          method: 'GET',
          headers: {
            'client': 'NONE_103',
            'x-api-key': 'l6k9ke23Cyzrl6p38OP3a9vUPQyFmT032fbgx7Kf',
            'authorization': 'Basic Qk9PVF81OmdFb2h6SkdqM3NwSg==',
            'territory': 'UK',
            'api-version': 'v200',
            'geolocation': latitude + ';' + longitude,
            'device-datetime': moment().format('YYYY-MM-DDTHH:mm:ss.SSSZ')
          }
        });
        const data = await response.json();
        setCinemas(data.cinemas);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };

    if (latitude && longitude) {
      fetchCinemasLocal();
    }
  }, [latitude, longitude]);



  // client:	BOOT_5
  // x-api-key:	l6k9ke23Cyzrl6p38OP3a9vUPQyFmT032fbgx7Kf
  // authorization:	Basic Qk9PVF81OmdFb2h6SkdqM3NwSg==
  // territory:	UK
  // api-version:	v200
  // geolocation:	Your location in format lat;lng, e.g. 52.47;-1.93
  // device-datetime:	yyyy-mm-ddThh:mm:ss.sssZ (ISO 8601 format, e.g. 2018-09-14T08:30:17.360Z)
  useEffect(() => {
    const fetchCinemasSearch = async () => {
      setIsLoading2(true);
      try {
        const response = await fetch(`https://api-gate2.movieglu.com/cinemasNearby/?n=1`, {
          method: 'GET',
          headers: {
            'client': 'NONE_103',
            'x-api-key': 'l6k9ke23Cyzrl6p38OP3a9vUPQyFmT032fbgx7Kf',
            'authorization': 'Basic Qk9PVF81OmdFb2h6SkdqM3NwSg==',
            'territory': 'UK',
            'api-version': 'v200',
            'geolocation': lat + ';' + long,
            'device-datetime': moment().format('YYYY-MM-DDTHH:mm:ss.SSSZ')
          }
        });
        const data = await response.json();
        setCinemas2(data.cinemas);
        setIsLoading2(false);
      } catch (error) {
        console.error(error);
        setIsLoading2(false);
      }
    };

    if (lat && long) {
      fetchCinemasSearch();
    }
  }, [lat, long]);

  const handleClick = () => {
    setIsLoading(true);
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
      console.log(latitude)

    });

  };


  useEffect(() => {
    console.log(latitude, longitude)


  }, [latitude, longitude]);




  useEffect(() => {
    console.log(lat, long);

  }, [lat, long]);


  const handleClickName = (e) => {
    setIsLoading2(true);
    e.preventDefault();
    const locationInput = document.querySelector('input[type="text"]');
    setLocationName(locationInput.value);
  }

  return (
    <div>
      <div className="myClass2 text-uppercase"><span> Movie & Cinema Finder</span></div>

      <div className="myClass"><span>Please choose from the options below</span></div>

      <a className="search btn btn-primary  text-uppercase">
        <input type="text" placeholder="Location..." />
        <button placeholder="Cinema..." value={locationName} className="btn btn-primary" onClick={handleClickName}>
          Find a UK based location!
        </button>
      </a>
      <div>
        <div className='renderedCinema'>

          {isLoading2 ? (
            <p>Loading cinemas... at {long} </p>
          ) : (
            <div>
              {cinemas2.length > 0 ? (
                <ul>
                  {cinemas2.map((cinema) => (
                    <li key={cinema.cinema_id}>
                      <p>Latitude: {lat}</p>
                      <p>Longitude: {long}</p>
                      <h3>{cinema.cinema_name}</h3>
                      <p>Address: {cinema.address}</p>
                      <p>Distance: {cinema.distance}</p>
                      <img className="logo" src={cinema.logo_url} alt="Cinema Logo" />
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No cinemas found close to {lat}
                </p>
              )}

            </div>
          )}


        </div>
      </div>




      <div> <a className="search btn btn-primary  text-uppercase">

        <button placeholder="Cinema..." className="btn btn-primary" onClick={handleClick}>
          Find my closest Cinema!
        </button>
      </a></div>
      <div className='renderedCinema'>
        {isLoading ? (
          <p>Loading cinemas... at {longitude} </p>
        ) : (
          <div>
            {cinemas.length > 0 ? (
              <ul>
                {cinemas.map((cinema) => (
                  <li key={cinema.cinema_id}>
                    <p>Latitude: {latitude}</p>
                    <p>Longitude: {longitude}</p>
                    <h3>{cinema.cinema_name}</h3>
                    <p>Address: {cinema.address}</p>
                    <p>Distance: {cinema.distance}</p>
                    <img className="logo" src={cinema.logo_url} alt="Cinema Logo" />
                  </li>
                ))}
              </ul>
            ) : (
              <p>No cinemas found close to {longitude}
              </p>
            )}

          </div>

        )}
      </div>
    </div>



  );
}