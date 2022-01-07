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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
