// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, push, ref, onValue } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXU_pGzWhNafyoR2357TqnDT5BH-6bJXQ",
  authDomain: "chatweb-42a51.firebaseapp.com",
  projectId: "chatweb-42a51",
  storageBucket: "chatweb-42a51.appspot.com",
  messagingSenderId: "241195399106",
  appId: "1:241195399106:web:3ee4f07d4a8080011d485b",
  measurementId: "G-EY7S5FB27S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

export { database, push, ref, onValue };
