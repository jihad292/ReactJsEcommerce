import firebase from "firebase/compat";
import '@firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyC_mPwKvXTPtRO0FNOapk0Daz9WxBPclDA",
  authDomain: "first-ecommerce-c5c38.firebaseapp.com",
  databaseURL: "https://first-ecommerce-c5c38-default-rtdb.firebaseio.com",
  projectId: "first-ecommerce-c5c38",
  storageBucket: "first-ecommerce-c5c38.appspot.com",
  messagingSenderId: "290631797823",
  appId: "1:290631797823:web:d6d4d89fee425484277c8a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage, firebase as default }