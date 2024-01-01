import React from "react";

// Object structuring, but can also use props. stg...
const MovieCard = ({ movie }) => {
  return (
    <div className="movie">
      <div>
        <p>{movie.Year}</p>
      </div>

      <div>
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "http://via.placehoder.com/400"
          }
          alt={movie.title}
        />
      </div>

      <div>
        <span>{movie.Type}</span>

        <h3>{movie.Title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
