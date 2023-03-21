import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
export default function SearchInfo() {
  const [savedMovieData, setSavedMovieData] = useState([]);
  
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("movies")) || [];
    const lastSevenSearches = savedData.slice(-7); // get the last 7 items in the array
    setSavedMovieData(lastSevenSearches);
  }, [localStorage.getItem("movies")]);
  
  
  return (<div className='accordian'>
    <ul className='searchInfoX'>
      {savedMovieData.map((movie, index) => (
        <li key={index}>
          <a href={`https://www.imdb.com/title/${movie.imdbID}/`}><img src={movie.Poster} /></a>
        </li>
      ))}
    </ul></div>
  );
}