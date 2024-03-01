// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getDatabase} from "@firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAj8STn0d_LpZ3f5J-6WPZ7z9y447AjE2w",
    authDomain: "lightoh.firebaseapp.com",
    databaseURL: "https://lightoh-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "lightoh",
    storageBucket: "lightoh.appspot.com",
    messagingSenderId: "21253040713",
    appId: "1:21253040713:web:5e2b1d8ef6ea7b3283ed98",
    measurementId: "G-EWRGM7WNH3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app)