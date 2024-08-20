import React from "react";
import { IMG_CDN } from "../utils/constants";

const MovieCard = ({ movie }) => {
  return (
    <div className="w-52 pr-4">
      <img alt="movie card" src={IMG_CDN + movie.poster_path} />
    </div>
  );
};

export default MovieCard;
