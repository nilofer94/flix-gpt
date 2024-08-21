import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const language = useSelector((store) => store.config.lang);
  return (
    <div className="pt-[10%]  flex justify-center">
      <form className="w-1/2  grid grid-cols-12">
        <input
          type="text"
          className="p-4 m-4 rounded-lg col-span-9"
          placeholder={lang[language].placeholder}
        />
        <button className="py-2 px-4 rounded-lg bg-red-800 text-white col-span-3 m-4">
          {lang[language].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
