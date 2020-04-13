import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC2xZarpgL397whom2ZDYg0vzb2PB1wOBo",
    authDomain: "react-firebase-f6837.firebaseapp.com",
    databaseURL: "https://react-firebase-f6837.firebaseio.com",
    projectId: "react-firebase-f6837",
    storageBucket: "react-firebase-f6837.appspot.com",
    messagingSenderId: "24954387180",
    appId: "1:24954387180:web:16c785d4a2f326a01e03c9",
    measurementId: "G-PK03W7FVCL"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;