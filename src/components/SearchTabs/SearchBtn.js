import { useState } from "react";
import '../SearchTabs/searchBtn.css'

export default function SearchBtn() {
  const [text, setText] = useState("");

  return (
    <>
      <div className="container">
        <div>
          <form className="form-inline">
            <input
              type="text"
              value={text}
              placeholder="Cinema Name"
              aria-label="Search"
              onChange={(e) => setText(e.target.value)}
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
          <form className="form-inline">
            <input
              className="form-control mr-sm-2"
              type="text"
              value={text}
              placeholder="Movie Name"
              aria-label="Search"
              onChange={(e) => setText(e.target.value)}
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
