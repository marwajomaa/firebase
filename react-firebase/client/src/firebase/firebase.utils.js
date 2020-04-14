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

   //function allow us to take the user that return from auth library and store in database
   export const createUserProfileDocument = async (userAuth, additionalData) => {
     //we only want to store the user in db if auth return an object(when user sign in)
     if(!userAuth) return;
       
     //if the userAuth fun exist we will query inside firestore to see if it exist
     const userRef = firestore.doc(`users/${userAuth.uid}`);

     const snapShot = await userRef.get();
     console.log(snapShot);
     
     if(!snapShot.exist){
       //we want to create data for that using ref object 
       const { displayName, email } = userAuth;
       const createdAt = new Date();
      
       //making async req for db to store data

       try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
       } catch (err) {
         console.log('error creating user', err.message)

       }
     }
     console.log(userRef);
     return userRef;
   }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;