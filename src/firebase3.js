// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const SecondaryappConfig = {
  apiKey: "AIzaSyBwlk82qCg-gu6uYAJEB2Bqjul4VTNsv5c",
  authDomain: "i-clean-worker.firebaseapp.com",
  projectId: "i-clean-worker",
  storageBucket: "i-clean-worker.appspot.com",
  messagingSenderId: "848324622616",
  appId: "1:848324622616:web:e0951a471959c531a0c66d",
  measurementId: "G-R6GTSYPJ1K"
};

// Initialize Firebase
const Secondaryapp = initializeApp(SecondaryappConfig,"secondary");
const auth2 = getAuth(Secondaryapp);
// const database = getDatabase(app);
// const dataRef = firebase.database();
export { Secondaryapp, auth2};