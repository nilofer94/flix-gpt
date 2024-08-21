import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] md:px-24 px-6 absolute bg-gradient-to-r from-black w-screen aspect-video text-white ">
      <h1 className="md:text-6xl md:font-bold font-light text-2xl">{title}</h1>
      <p className="md:text-lg md:py-6 md:w-1/4 md:inline-block hidden">
        {overview}
      </p>
      <div>
        <button className="text-black md:py-4 bg-white md:px-12 text-xl rounded-lg hover:bg-opacity-80 px-3 py-1 mt-2">
          ▶️ Play
        </button>
        <button className="text-white py-4 bg-gray-500 px-12 text-xl rounded-lg bg-opacity-50 mx-2 hover:bg-opacity-30 md:inline-block hidden ">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
