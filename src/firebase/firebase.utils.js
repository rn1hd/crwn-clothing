import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyC0C12Yd7TKiDJ-LVhwOGntN59nTyRYDaM",
  authDomain: "crwn-db-7dc09.firebaseapp.com",
  projectId: "crwn-db-7dc09",
  storageBucket: "crwn-db-7dc09.appspot.com",
  messagingSenderId: "830558972750",
  appId: "1:830558972750:web:1e2d06a3a419c5a393cc1f",
  measurementId: "G-FCKTDFH4P7"
};

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
        ...additionalData
      })

    } catch(error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;