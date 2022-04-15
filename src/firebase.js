// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnmf_j2az-eA9XEl2ZN9NYsfzkQXAzRsw",
  authDomain: "loretta-pasteleria.firebaseapp.com",
  projectId: "loretta-pasteleria",
  storageBucket: "loretta-pasteleria.appspot.com",
  messagingSenderId: "228011779605",
  appId: "1:228011779605:web:bfe529554dabf14d2d901c",
  measurementId: "G-6GYRLCS7MP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db

