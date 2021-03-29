import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAkfhD6BUiG3vZKWmsoK2XUb1n9ttYD0ig",
    authDomain: "linkedin-clone-15125.firebaseapp.com",
    projectId: "linkedin-clone-15125",
    storageBucket: "linkedin-clone-15125.appspot.com",
    messagingSenderId: "602638804378",
    appId: "1:602638804378:web:ede7b3159d592015338623"
  };

  const firebaseapp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };