import { useState } from "react";
import '../SearchTabs/searchBtn.css'

export default function SearchBtn() {
  const [cinemaName, setCinemaName] = useState("");
  const [movie, setMovie] =useState ('')

  return (
    <>
      <div className="container">
        <div>
          <form className="form-inline Cinema Name">
            <input
              type="text"
              value={cinemaName}
              placeholder="Cinema Name"
              aria-label="Search"
              onChange={(e) => setCinemaName(e.target.value)}
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
              onClick={() => {}}
            >
              Locate Cinema
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
              onClick={() => {}}
            >
              Search Movie
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
