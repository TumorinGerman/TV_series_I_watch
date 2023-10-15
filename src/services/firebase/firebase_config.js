import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// import userStateChangeHandler from "./utils/userStateChangeHandler";

const firebaseConfig = {
  apiKey: "AIzaSyDon0doLOgI6vSg1HPDov-3ywG1-actRoQ",
  authDomain: "tv-series-i-watch.firebaseapp.com",
  projectId: "tv-series-i-watch",
  storageBucket: "tv-series-i-watch.appspot.com",
  messagingSenderId: "675230526861",
  appId: "1:675230526861:web:6d7bd2f599e2cccd2b21c4",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
// onAuthStateChanged(auth, userStateChangeHandler);
