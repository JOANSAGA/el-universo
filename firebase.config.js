import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBD3JBbgW3FY1u9yoDOgUrl0z1Id5wnilg",
  authDomain: "prueba-eluniverso.firebaseapp.com",
  projectId: "prueba-eluniverso",
  storageBucket: "prueba-eluniverso.appspot.com",
  messagingSenderId: "355079138663",
  appId: "1:355079138663:web:bbe1e86fd58a2b25a6d3c2",
  measurementId: "G-YLMG20DERX",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
