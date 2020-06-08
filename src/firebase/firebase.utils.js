import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC37m7qwR3QLtxBzSQz79FSHwjlslcCeNw",
  authDomain: "jupiter-db.firebaseapp.com",
  databaseURL: "https://jupiter-db.firebaseio.com",
  projectId: "jupiter-db",
  storageBucket: "jupiter-db.appspot.com",
  messagingSenderId: "59127046453",
  appId: "1:59127046453:web:bb1a476ef46ea645016c7c",
  measurementId: "G-VMR9X40SPX",
};

export const getReference = (path) => {
  try {
    const ref = firestore.doc(path);
    return ref;
  } catch (error) {
    console.error(error);
  }
  return null;
};

export const get = async (reference) => {
  try {
    const snapShot = await reference.get();
    return snapShot;
  } catch (error) {
    console.error(error);
  }
  return null;
};

export const set = async (ref, req) => {
  try {
    await ref.set(req);
  } catch (error) {
    console.error(error);
  }
  return ref;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
