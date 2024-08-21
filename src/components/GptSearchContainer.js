import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import bg_img from "../assets/images/flix_bg.jpg";

const GptSearchContainer = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={bg_img} alt="background" />
      </div>

      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearchContainer;
