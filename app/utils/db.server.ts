import admin from "firebase-admin";
import {
  applicationDefault,
  initializeApp as initialiseAdminApp,
} from "firebase-admin/app";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "do-you-need-an-umbrella.firebaseapp.com",
  projectId: "do-you-need-an-umbrella",
  storageBucket: "do-you-need-an-umbrella.appspot.com",
  messagingSenderId: "502216027320",
  appId: "1:502216027320:web:6ca1af0a76a97428b2d84d",
};

if (!admin.apps.length) {
  initialiseAdminApp({ credential: applicationDefault(), databaseURL: "" });
}
const db = admin.firestore();

let Firebase;

if (Firebase?.apps?.length) {
  Firebase = initializeApp(firebaseConfig);
}

export { db };
