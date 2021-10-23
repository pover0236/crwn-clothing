import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: 'AIzaSyA2zEGC4aBBKa0Qf1pLoyNsFDjIxRsxtKM',
    authDomain: 'crwn-db-b3400.firebaseapp.com',
    projectId: 'crwn-db-b3400',
    storageBucket: 'crwn-db-b3400.appspot.com',
    messagingSenderId: '446977201902',
    appId: '1:446977201902:web:354b694a8ca32b87a545ff',
    measurementId: 'G-CH9HVV5XH3'
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
  