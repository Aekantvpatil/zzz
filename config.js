import * as  firebase from 'firebase'
require('@firebase/firestore')

const firebaseConfig = {
    apiKey: "AIzaSyCuMcKXJuzmS_oVhZgWXe7XOSaXoEk5ASo",
    authDomain: "wily-72cdb.firebaseapp.com",
    projectId: "wily-72cdb",
    storageBucket: "wily-72cdb.appspot.com",
    messagingSenderId: "738864664111",
    appId: "1:738864664111:web:b1bc041dddafcd42f580da"
  };
  // Initialize Firebase
  
  // Initialize Firebase
  if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);}
export default  firebase.firestore;