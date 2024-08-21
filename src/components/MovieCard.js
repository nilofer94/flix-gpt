import React from "react";
import { IMG_CDN } from "../utils/constants";

const MovieCard = ({ movie }) => {
  return (
    <div className="w-52 pr-4">
      <img
        alt="movie card"
        src={IMG_CDN + movie.poster_path}
        className="transition-all duration-300 hover:scale-110 "
      />
    </div>
  );
};

export default MovieCard;
