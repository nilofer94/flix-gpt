import React from "react";
import { HEADER_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="absolute px-4 py-2 bg-gradient-to-b from-black z-10">
      <img className="w-40" src={HEADER_URL} alt="logo" />
    </div>
  );
};

export default Header;
