import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyDN0SE-QCzzq5pDaKLBRRvfywbf0ES9io4",
  authDomain: "clone-e3e73.firebaseapp.com",
  projectId: "clone-e3e73",
  storageBucket: "clone-e3e73.appspot.com",
  messagingSenderId: "956080436530",
  appId: "1:956080436530:web:f8ecbc333bbf6ad0d9132b",
  measurementId: "G-VJEB16B3NJ"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db=firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth} ;