import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyBobLh0enwcNa0qsNjGNUPkdjX5O7sToOE",
  authDomain: "iclean-3c00a.firebaseapp.com",
  databaseURL: "https://iclean-3c00a-default-rtdb.firebaseio.com",
  projectId: "iclean-3c00a",
  storageBucket: "iclean-3c00a.appspot.com",
  messagingSenderId: "969324337453",
  appId: "1:969324337453:web:e93ec7c75bb109a504dba4",
  measurementId: "G-208GR0MS4K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);
// const dataRef = firebase.database();
export { app, auth, database };