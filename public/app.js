// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9AqSRvvpU08EG__CrowUgNEZKm74Grr4",
  authDomain: "cde-awkn-web2024.firebaseapp.com",
  projectId: "cde-awkn-web2024",
  storageBucket: "cde-awkn-web2024.firebasestorage.app",
  messagingSenderId: "312314988926",
  appId: "1:312314988926:web:4241b12cc1581f4b0f0b2f",
  measurementId: "G-JBTYDYKJNE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);