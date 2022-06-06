
//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCMJN6oC4RJ9c7GR8_DZ0WOEH3tD2y7KdQ",
  authDomain: "clothing-ecom-8564d.firebaseapp.com",
  projectId: "clothing-ecom-8564d",
  storageBucket: "clothing-ecom-8564d.appspot.com",
  messagingSenderId: "231897702126",
  appId: "1:231897702126:web:7f125d9da91d541635ddff",
  measurementId: "G-RC3FP1780P"
};


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
//const analytics = firebase.getAnalytics(app);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


