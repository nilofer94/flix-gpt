import React from "react";
import { HEADER_URL } from "../utils/constants";
import user from "../assets/images/user.png";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";

const Header = () => {
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between items-center">
      <img className="w-40" src={HEADER_URL} alt="logo" />
      <div className="flex cursor-pointer font-bold" onClick={handleSignOut}>
        <img src={user} alt="user-icon" />
        <span>(Sign out)</span>
      </div>
    </div>
  );
};

export default Header;
