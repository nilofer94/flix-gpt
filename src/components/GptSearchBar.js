import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";
import openaiUtil from "../utils/openai";

const GptSearchBar = () => {
  const language = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const handleSearch = async (e) => {
    e.preventDefault();
    const gptQuery =
      "Act as a movie recommendation system and suggest some movies for the query " +
      searchText.current.value +
      ".Only give names of five movies comma seperated like the example result given ahead.Example result:Indian,Don,Sholey,Master,Love Today";

    const gptResults = await openaiUtil.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    console.log(gptResults);
  };

  return (
    <div className="pt-[35%] md:pt-[10%]  flex justify-center">
      <form className="w-full md:w-1/2  grid grid-cols-12">
        <input
          type="text"
          className="p-4 m-4 rounded-lg col-span-9"
          placeholder={lang[language].placeholder}
          ref={searchText}
        />
        <button
          className="py-2 px-4 rounded-lg bg-red-800 text-white col-span-3 m-4"
          onClick={(e) => handleSearch(e)}
        >
          {lang[language].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
