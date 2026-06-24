// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdSXMWXHjSoi3v-CfwV5DmoLgoj1vkOD4",
  authDomain: "simple-firebase-auth-pra-5871e.firebaseapp.com",
  projectId: "simple-firebase-auth-pra-5871e",
  storageBucket: "simple-firebase-auth-pra-5871e.firebasestorage.app",
  messagingSenderId: "37069415773",
  appId: "1:37069415773:web:bfd488065f32d3236fb4b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);