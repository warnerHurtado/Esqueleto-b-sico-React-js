import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyB8EYxmPMZrYs6WCacWyf8iddhjVwEhoAc",
    authDomain: "react-app-curso-1cde1.firebaseapp.com",
    projectId: "react-app-curso-1cde1",
    storageBucket: "react-app-curso-1cde1.appspot.com",
    messagingSenderId: "312388209911",
    appId: "1:312388209911:web:952d7a06271659e6e517f2",
    measurementId: "G-SD8L30MDL2"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider(); 

export {
    db,
    googleAuthProvider,
    firebase
}