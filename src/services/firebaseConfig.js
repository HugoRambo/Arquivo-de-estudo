// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {    getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSZ6HYt6zK5CpAFBdLlesSu6LZSKSTAAQ",
  authDomain: "project2022-d5975.firebaseapp.com",
  projectId: "project2022-d5975",
  storageBucket: "project2022-d5975.appspot.com",
  messagingSenderId: "956482780031",
  appId: "1:956482780031:web:061ad56009b0e1d2e1b84a",
  measurementId: "G-P28TX19JP7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)