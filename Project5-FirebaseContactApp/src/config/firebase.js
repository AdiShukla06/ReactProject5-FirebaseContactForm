// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuD5PO4_V8IpWfW_AQGOv9F85unGR1lQ8",
  authDomain: "vite-contactform.firebaseapp.com",
  projectId: "vite-contactform",
  storageBucket: "vite-contactform.appspot.com",
  messagingSenderId: "344125764269",
  appId: "1:344125764269:web:b6340b44b7569736f44c24"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
