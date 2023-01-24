// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export function StartFirebase() {
  const firebaseConfig = {
    apiKey: "AIzaSyBcakr6VX4jdtoENMKo6f1SNTzUFfnovio",
    authDomain: "megasystemappbd.firebaseapp.com",
    projectId: "megasystemappbd",
    storageBucket: "megasystemappbd.appspot.com",
    messagingSenderId: "643055448504",
    appId: "1:643055448504:web:deed50084acdbc466b5f4d",
  };
  const app = initializeApp(firebaseConfig);
  return getDatabase(app);
}
