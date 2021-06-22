import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyBlO7dl0ebOrQEfWni7MPxOlTUoDTbMGlM",
    authDomain: "clone-72741.firebaseapp.com",
    projectId: "clone-72741",
    storageBucket: "clone-72741.appspot.com",
    messagingSenderId: "128886943862",
    appId: "1:128886943862:web:fc40e287b79138c430ef57"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {db,auth,provider};