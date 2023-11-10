import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBxLubdLFl1KRXf2Hfo25e9AKl4Xm000nA",
  authDomain: "prueba-react-bde10.firebaseapp.com",
  projectId: "prueba-react-bde10",
  storageBucket: "prueba-react-bde10.appspot.com",
  messagingSenderId: "810522242992",
  appId: "1:810522242992:web:f88901bdfead0c95c97075",
  measurementId: "G-YGBJM0KJWY"
};


const app = initializeApp(firebaseConfig);


export const db = getFirestore(app)