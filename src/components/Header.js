import React, { useEffect } from "react";
import user from "../assets/images/user.png";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import logo from "../assets/images/flixLogo-Photoroom.png";
import { toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        //user sign in
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, name: displayName }));
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between items-center">
      <img className="w-44 mx-auto md:mx-0" src={logo} alt="logo" />

      {user && (
        <div className="flex items-center p-2">
          {showGptSearch && (
            <select
              className="p-2 m-2 bg-gray-900 text-white rounded-lg cursor-pointer"
              onChange={(e) => handleLanguageChange(e)}
            >
              {SUPPORTED_LANGUAGES.map((supLang) => {
                return <option value={supLang.value}>{supLang.name}</option>;
              })}
            </select>
          )}
          <button
            className="px-2 rounded-xl text-white bg-purple-800 mx-4 py-2"
            onClick={() => handleGptSearchClick()}
          >
            {showGptSearch ? "Home Page" : "GPT Search"}
          </button>
          {/* <img src={user} alt="user-icon" height={30} width=/> */}
          <button className="font-bold text-white" onClick={handleSignOut}>
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
