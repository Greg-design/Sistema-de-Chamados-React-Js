

import firebase from "firebase/app";
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCmUxSXOcjjAgv49diu9HJwGCr43gg5jvE",
    authDomain: "sistema-8a57d.firebaseapp.com",
    projectId: "sistema-8a57d",
    storageBucket: "sistema-8a57d.appspot.com",
    messagingSenderId: "541286936111",
    appId: "1:541286936111:web:a0cbeac67ac0bc6279e0da",
    measurementId: "G-C5RLPYHV1R"
  };
  
if(!firebase.apps.length){
   firebase.initializeApp(firebaseConfig)
}

export default firebase