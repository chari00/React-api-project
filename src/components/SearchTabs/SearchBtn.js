import { useState } from "react";
import "../SearchTabs/searchBtn.css";

export default function SearchBtn({ setLocation }) {
  const [cinemaName, setCinemaName] = useState("");
  const [movie, setMovie] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(cinemaName);
    setLocation(cinemaName);
    setMovie(movie);
    console.log(movie);


  }
  
  return (
    <>
      <div className="container">
        <div>
          <form className="form-inline Cinema Name">
            <input
              id="map"
              type="text"
              value={cinemaName}
              placeholder="Location Name"
              aria-label="Search"
              onChange={(e) => setCinemaName(e.target.value)}
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
              onClick={(e) => handleSubmit(e)}
            >
              Search
            </button>
          </form>
        </div>
        <div>
          <form className="form-inline Movie Name">
            <input
              className="form-control mr-sm-2"
              type="text"
              value={movie}
              placeholder="Movie Name"
              aria-label="Search"
              onChange={(e) => setMovie(e.target.value)}
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
              onClick={(e) => handleSubmit(e)}
            >
              Search 
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
