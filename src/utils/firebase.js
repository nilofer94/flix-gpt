// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6xB9SswXrfWRs2ZOKz7meUDJNaa09Vbg",
  authDomain: "flixgpt-54d6b.firebaseapp.com",
  projectId: "flixgpt-54d6b",
  storageBucket: "flixgpt-54d6b.appspot.com",
  messagingSenderId: "860352848960",
  appId: "1:860352848960:web:a4f86a68a5128b517c6ba5",
  measurementId: "G-VWMR7BDZD8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
