// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfl9xZjNXmgvF74O515Ow99ut0BJds84k",
  authDomain: "cadman-26717.firebaseapp.com",
  projectId: "cadman-26717",
  storageBucket: "cadman-26717.appspot.com",
  messagingSenderId: "42620089511",
  appId: "1:42620089511:web:0d2bdb08a31a6771d81782",
};

// Initialize Firebase
let app;
if (getApps.length === 0) {
  const app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}

const auth = getAuth();

export { auth };
