// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCu_t8tmZ3tAQE2168qpEon08q9mgZawcE",
  authDomain: "quora-clone-d8735.firebaseapp.com",
  projectId: "quora-clone-d8735",
  storageBucket: "quora-clone-d8735.appspot.com",
  messagingSenderId: "378295563168",
  appId: "1:378295563168:web:8787547c6228cfd27a2ac5",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };
