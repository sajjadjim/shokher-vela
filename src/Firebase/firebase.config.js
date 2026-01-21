// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-2Ups-g5_Dsf3oYtV-vAci4HW0K9hDkQ",
  authDomain: "shokher-vela.firebaseapp.com",
  projectId: "shokher-vela",
  storageBucket: "shokher-vela.firebasestorage.app",
  messagingSenderId: "1096514698119",
  appId: "1:1096514698119:web:c8e4b0c0af79edacb37122"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);