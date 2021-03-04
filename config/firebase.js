import * as firebase from "firebase";
import "firebase/auth";
require("firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBqZy5kOml_WTrIEA9VDWy_6zpyqmqhOIk",
  authDomain: "insta-clone-tsx.firebaseapp.com",
  projectId: "insta-clone-tsx",
  storageBucket: "insta-clone-tsx.appspot.com",
  messagingSenderId: "858347107662",
  appId: "1:858347107662:web:15cd04cd7609bc37009a1f",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;
