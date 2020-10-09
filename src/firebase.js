import * as firebase from "firebase/app"

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,                        //"AIzaSyA0qqylPqSUVI5d7d_8dBHh0JYrEX79--I",
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,          //"nwitter-2d24d.firebaseapp.com",
    databaseURL: process.env.REACT_APP_DATABASE_URL,      //"https://nwitter-2d24d.firebaseio.com",
    projectId: process.env.REACT_APP_PROJECT_ID,            //"nwitter-2d24d",
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,   //"nwitter-2d24d.appspot.com",
    messagingSenderId: process.env.REACT_APP_MESSAGIN_ID,   //"386726893142",
    appId: process.env.REACT_APP_APP_ID                           //"1:386726893142:web:7b97504c0593759207cdf7"
  };