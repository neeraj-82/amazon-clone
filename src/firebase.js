import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAEcykTwWFkzJqoe3DDaIV4eAn-nf-KEmk",
    authDomain: "amazin-clone-2985b.firebaseapp.com",
    projectId: "amazin-clone-2985b",
    storageBucket: "amazin-clone-2985b.appspot.com",
    messagingSenderId: "100597646737",
    appId: "1:100597646737:web:b6d5fa4966aa40087a4630",
    measurementId: "G-VJVV9WN29N"
  };

const firebaseapp=firebase.initializeApp(firebaseConfig);
const db=firebaseapp.firestore();
const auth=firebase.auth();

export {db,auth};