import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] px-24 absolute bg-gradient-to-r from-black w-screen aspect-video text-white ">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="text-lg py-6 w-1/4">{overview}</p>
      <div>
        <button className="text-black p-4 bg-white px-12 text-xl rounded-lg hover:bg-opacity-80">
          ▶️ Play
        </button>
        <button className="text-white p-4 bg-gray-500 px-12 text-xl rounded-lg bg-opacity-50 mx-2 hover:bg-opacity-30">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
