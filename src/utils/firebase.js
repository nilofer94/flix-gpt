// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCx4Mfc9tlTFCtjdRdl1riVF_XLMmqgY58",
  authDomain: "flixgpt-a18de.firebaseapp.com",
  projectId: "flixgpt-a18de",
  storageBucket: "flixgpt-a18de.appspot.com",
  messagingSenderId: "1003115657801",
  appId: "1:1003115657801:web:85d660046849d099691d98",
  measurementId: "G-ZR62E34KHF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
