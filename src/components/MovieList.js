import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6">
      <div className="text-xl py-6 text-white">{title}</div>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies?.length > 0 &&
            movies.map((movie) => {
              return <MovieCard movie={movie} key={movie.id} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
