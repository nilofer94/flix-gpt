import React, { useState } from "react";
import Header from "./Header";
import { BG_LOGIN_URL } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={BG_LOGIN_URL} alt="background" />
      </div>
      <form className="absolute p-12 bg-black w-4/12 my-36 mx-auto left-0 right-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl pb-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-2 w-full rounded-lg bg-transparent border border-solid border-gray-600"
        ></input>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-2 w-full rounded-lg bg-transparent border border-solid border-gray-600"
          ></input>
        )}
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-full rounded-lg bg-transparent border border-solid border-gray-600"
        ></input>
        <button className="p-4 my-2 bg-red-700 w-full rounded-lg">
          Sign In
        </button>
        <p className="py-4">
          <span className="text-gray-500">
            {isSignInForm ? "New to flixGPT?" : "Already registered?"}
          </span>
          <span
            className="text-white pl-2 cursor-pointer hover:underline"
            onClick={() => toggleSignInForm()}
          >
            {isSignInForm ? "Sign up now." : "Sign in now."}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
