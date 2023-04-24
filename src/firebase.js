import firebase from "firebase/compat/app";
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
const firebaseConfig ={
  apiKey: "AIzaSyARG3vKLiJckZKwvUcGEdKkMMpJZLgrC3Q",
  authDomain: "fir-4b198.firebaseapp.com",
  projectId: "fir-4b198",
  storageBucket: "fir-4b198.appspot.com",
  messagingSenderId: "459007766217",
  appId: "1:459007766217:web:93c80384e27330fb40e718",
  measurementId: "G-L6M7XM63FM"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };