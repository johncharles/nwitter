import * as firebase from "firebase/app"

const firebaseConfig = {
    apiKey: "AIzaSyA0qqylPqSUVI5d7d_8dBHh0JYrEX79--I",
    authDomain: "nwitter-2d24d.firebaseapp.com",
    databaseURL: "https://nwitter-2d24d.firebaseio.com",
    projectId: "nwitter-2d24d",
    storageBucket: "nwitter-2d24d.appspot.com",
    messagingSenderId: "386726893142",
    appId: "1:386726893142:web:7b97504c0593759207cdf7"
  };

  // Initialize Firebase
  export default firebase.initializeApp(firebaseConfig);