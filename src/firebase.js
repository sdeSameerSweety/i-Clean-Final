// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics"
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const TertiaryappConfig = {
  apiKey: "AIzaSyDl0ByhfGaUnh_nsuVEyJfs0Foenga-jj0",
  authDomain: "i-clean-main-admin.firebaseapp.com",
  projectId: "i-clean-main-admin",
  storageBucket: "i-clean-main-admin.appspot.com",
  messagingSenderId: "791515033386",
  appId: "1:791515033386:web:3e1f17c5f6ec374480f853",
  measurementId: "G-1RVS3MNBH0"
};

// Initialize Firebase
const Tertiaryapp = initializeApp(TertiaryappConfig,"tertiary");
// const analytics = getAnalytics(app);
const auth3 = getAuth(Tertiaryapp);
export { Tertiaryapp, auth3 }
