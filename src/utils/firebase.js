// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsZ_LN1jVyxPIWGc-5G0H1p1m0_UTJjLI",
  authDomain: "netflixgpt-79c64.firebaseapp.com",
  projectId: "netflixgpt-79c64",
  storageBucket: "netflixgpt-79c64.firebasestorage.app",
  messagingSenderId: "286069204488",
  appId: "1:286069204488:web:e88f8c6526f284094313bd",
  measurementId: "G-P86JQDZ3FQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 export const auth=getAuth();