// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZouXV7GG-mUTYsOgNZpXi8mjCPVy4Wuk",
  authDomain: "assignment-11-32820.firebaseapp.com",
  projectId: "assignment-11-32820",
  storageBucket: "assignment-11-32820.appspot.com",
  messagingSenderId: "193349107449",
  appId: "1:193349107449:web:8fe8791efa3172ba556c28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth;