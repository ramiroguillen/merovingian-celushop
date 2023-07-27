import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAI9L_04FFl7Aeknq8VA16EuNi4Civ-Gp8",
  authDomain: "merovingian-celushop.firebaseapp.com",
  projectId: "merovingian-celushop",
  storageBucket: "merovingian-celushop.appspot.com",
  messagingSenderId: "496424226285",
  appId: "1:496424226285:web:8d2879b45466ffb483ebe4",
  measurementId: "G-0EZ6ZQFCX7"
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;