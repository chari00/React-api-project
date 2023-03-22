import React from "react";
import { useState, useEffect, useCallback } from "react";
import "./App.css";
import ReactDOM from 'react-dom';
import SearchInfo from "./components/SearchTabs/SearchHistory";
import GeoLoc from "./components/MapTab/MapSearch";


function App(props) {
  const [movie, setMovie] = useState();

  const searchMovie = useCallback(() => {
    const input = document.getElementById("movieInput").value;
    if (!input) {
      // If input is empty, displays nothing
      return;
    }

    fetch(`https://www.omdbapi.com/?apikey=f1bca951&t=${input}&plot=full`, {
      method: "GET"
    })
      .then((response) => response.json())
      .then((movieData) => {
        setMovie(movieData);
        let savedMovieData = JSON.parse(localStorage.getItem("movies")) || [];
        savedMovieData.push(movieData);
        localStorage.setItem("movies", JSON.stringify(savedMovieData));
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    let savedMovieData = JSON.parse(localStorage.getItem("movies")) || [];
    if (savedMovieData.length > 0) {
      let savedSearch = savedMovieData[savedMovieData.length - 1];
      setMovie(savedSearch);
    }
  }, []);

  useEffect(() => {
    // Updates search info component after movie state has been updated
    movie && ReactDOM.render(
      <React.StrictMode>
        <SearchInfo movie={movie} />
      </React.StrictMode>,
      document.getElementById('searchInfo')
    );
  }, [movie]);

  return (
    <div>
      <div><GeoLoc /></div>
      <div className="intro-text" id="searchAgain">
        <a className="search btn btn-primary  text-uppercase">
          <input type="text" placeholder="Movie..." id="movieInput" />
          <button className="btn btn-primary" onClick={searchMovie} >Let's find a movie!</button>
        </a>
      </div>

      {movie && (
        <div>

          <div className="renderedMovie">
            <div><img src={movie.Poster} alt={movie.Title} /></div>
            <div>
              <p>
                <h2>{movie.Title}</h2>

              </p>
              <div><p>Plot: {movie.Plot}</p></div>
              <p>Director: {movie.Director}</p>
              <p>Actors: {movie.Actors}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
