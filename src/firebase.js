// import firebase from "firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBu1-B4hm_bw1GIi2UTPlJWdgjAgZM_XZ0",
    authDomain: "linkedin-clone-c399f.firebaseapp.com",
    projectId: "linkedin-clone-c399f",
    storageBucket: "linkedin-clone-c399f.appspot.com",
    messagingSenderId: "554561144329",
    appId: "1:554561144329:web:3c83b5a57839267fa65ad8"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();

  const auth = firebase.auth();


  export {db, auth};