import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyApe3rS0zYe44wKUAeGoe5kard-Jy8HEfE",
  authDomain: "crwn-clothing-react-database.firebaseapp.com",
  projectId: "crwn-clothing-react-database",
  storageBucket: "crwn-clothing-react-database.appspot.com",
  messagingSenderId: "708429742057",
  appId: "1:708429742057:web:ce3c0dfddb0574facc5578",
  measurementId: "G-YE02RFEFWX",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
