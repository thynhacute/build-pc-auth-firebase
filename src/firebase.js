// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtTBuh6T35ng9xHv1qbhR2Clua5WJjjXc",
  authDomain: "auth-thy-check.firebaseapp.com",
  projectId: "auth-thy-check",
  storageBucket: "auth-thy-check.appspot.com",
  messagingSenderId: "327968844603",
  appId: "1:327968844603:web:7f9c46ebe60583e363251e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);