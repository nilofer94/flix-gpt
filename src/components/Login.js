import React, { useRef, useState } from "react";
import Header from "./Header";
import { BG_LOGIN_URL } from "../utils/constants";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
    setErrorMessage(null);
  };

  const handleButtonClick = (e) => {
    // Validate the form
    e.preventDefault();
    const message = checkValidData(
      name?.current?.value,
      email.current.value,
      password.current.value,
      isSignInForm
    );
    setErrorMessage(message);
    if (message) return;
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(addUser({ uid: uid, email: email, name: displayName }));
              navigate("/browse");
            })
            .catch((error) => {
              navigate("/");
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
          navigate("/");
        });
    } else {
      //sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
          navigate("/");
        });
    }
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
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-2 w-full rounded-lg bg-transparent border border-solid border-gray-600"
            ref={name}
          ></input>
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-2 w-full rounded-lg bg-transparent border border-solid border-gray-600"
          ref={email}
        ></input>
        <input
          type="password"
          placeholder="Password"
          ref={password}
          className="p-4 my-2 w-full rounded-lg bg-transparent border border-solid border-gray-600"
        ></input>
        <button
          className="p-4 my-2 bg-red-700 w-full rounded-lg"
          onClick={(e) => handleButtonClick(e)}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        {errorMessage && <p className="text-red-500 py-4">{errorMessage}</p>}
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
