import { initializeApp } from 'firebase/app';
import {
    getAuth, 
    signInWithRedirect, 
    signInWithPopup,
     GoogleAuthProvider, 
    } from 'firebase/auth';

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDclZEEDv3LzjpsfcfMdAXYokY7aUeoJhs",
    authDomain: "luxuryoutletbrands-db.firebaseapp.com",
    projectId: "luxuryoutletbrands-db",
    storageBucket: "luxuryoutletbrands-db.appspot.com",
    messagingSenderId: "510454151425",
    appId: "1:510454151425:web:3e7dbb88c2173ef1050300",
  };

  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: 'select_account',
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithGooglePopup(auth, provider);

  export const db = getFirestore();

 export const createUserDocumentFromAuth = async (userAuth) => {
    //const userDocRef = doc(db, 'users', )

  };
