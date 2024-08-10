// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJybGIS5yF7ibSPEJw3Mk2V5C2lohekRM",
  authDomain: "company-site-8ddbf.firebaseapp.com",
  projectId: "company-site-8ddbf",
  storageBucket: "company-site-8ddbf.appspot.com",
  messagingSenderId: "1053108407797",
  appId: "1:1053108407797:web:5116083eda23322ee8a4bc",
  measurementId: "G-7BN0QWBQPY",
};

// Initialize Firebase
const firebase_app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const auth = getAuth(firebase_app);
const db = getFirestore(firebase_app);

export { firebase_app, db, auth };
