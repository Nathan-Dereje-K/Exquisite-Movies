/* eslint-disable jsx-a11y/alt-text */
import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
//8a77a2f6
import "../App.css";
import Searchicon from "../search.svg";

const API_URL = "http://www.omdbapi.com?apikey=8a77a2f6";

// const movie1 =

//     {
//         "Title": "Utopia",
//         "Year": "2020",
//         "imdbID": "tt8303474",
//         "Type": "series",
//         "Poster": "https://m.media-amazon.com/images/M/MV5BYWE4Y2M4YzItNWQzMy00YzA0LThjYTQtNDhlZDBkMjYzOGRmXkEyXkFqcGdeQXVyNjcyNjcyMzQ@._V1_SX300.jpg"
//     }

const LandingPage = () => {
  const [searchTerm, setSearchTerm] = useState([""]);

  const [movies, setMovies] = useState([]);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title} `);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Utopia");
  }, []);
  return (
    <div className="app">
      <h1>Exqusite Movies</h1>

      <div className="search">
        <input
          placeholder="Search for movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={Searchicon}
          alt="Search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found! </h2>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
