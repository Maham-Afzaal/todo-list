// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjOpE85JJRTSucg-kDun2qBBOFIx5srBI",
  authDomain: "todo-d6f87.firebaseapp.com",
  projectId: "todo-d6f87",
  storageBucket: "todo-d6f87.appspot.com",
  messagingSenderId: "1022795294977",
  appId: "1:1022795294977:web:ef1619c16336bf72b3d300",
  measurementId: "G-CFPM4XK31Y"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };