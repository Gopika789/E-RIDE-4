import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_sVgrpIPxEfhx62Se8m59N70tOvsf-6s",
  authDomain: "e-ride-app-5c6d3.firebaseapp.com",
  projectId: "e-ride-app-5c6d3",
  storageBucket: "e-ride-app-5c6d3.appspot.com",
  messagingSenderId: "599405587001",
  appId: "1:599405587001:web:84f7c0a69294a2370ebbe8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);




firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


