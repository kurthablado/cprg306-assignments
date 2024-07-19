"use client"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
 
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCCz9ZZ8Whf6kYRCjd-1anqcaFMrgmGygE",
    authDomain: "cprg306-assignments-c0e24.firebaseapp.com",
    projectId: "cprg306-assignments-c0e24",
    storageBucket: "cprg306-assignments-c0e24.appspot.com",
    messagingSenderId: "844137488499",
    appId: "1:844137488499:web:548a9590c4526219cb0a06",
    measurementId: "G-71J18JTQ2L"
  };
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);