import React, { useState, useEffect } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./movieCard";

// e023b9e8
const API_URL = "http://www.omdbapi.com?apikey=e023b9e8";
const movie1 = {
  Title: "Batman v Superman: Dawn of Justice (Ultimate Edition)",
  Year: "2016",
  imdbID: "tt18689424",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BOTRlNWQwM2ItNjkyZC00MGI3LThkYjktZmE5N2FlMzcyNTIyXkEyXkFqcGdeQXVyMTEyNzgwMDUw._V1_SX300.jpg",
};
function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };
  useEffect(() => {
    searchMovies("superman");
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          placeholder="Search for Movies"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <img src={SearchIcon} alt="search" onClick={() => {searchMovies(searchTerm)}} />
      </div>
      <div>
        {movies.length > 0 ? (
          <div className="container">
            {movies.map((movie) => {
              return <MovieCard movie={movie} />;
            })}
          </div>
        ) : (
          <div className="empty">
            <h2>No Movies Found</h2>
          </div>
        )}
      </div>
    </div>
  );
}
export default App;
