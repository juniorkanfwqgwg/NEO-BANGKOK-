// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9AqSRvvpU08EG__CrowUgNEZKm74Grr4",
  authDomain: "cde-awkn-web2024.firebaseapp.com",
  databaseURL: "https://cde-awkn-web2024-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "cde-awkn-web2024",
  storageBucket: "cde-awkn-web2024.firebasestorage.app",
  messagingSenderId: "312314988926",
  appId: "1:312314988926:web:4241b12cc1581f4b0f0b2f",
  measurementId: "G-JBTYDYKJNE"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// ส่งข้อมูล sticker ไปยัง Firestore
export async function sendStickerData(stickerId) {
    try {
        const docRef = await addDoc(collection(db, "stickers"), {
            stickerId: stickerId,
            timestamp: serverTimestamp()
        });
        // alert("Sticker data sent to Firebase!");
        window.location.reload();
    } catch (error) {
        console.error("Error sending sticker data to Firebase:", error);
        alert("Failed to send sticker data.");
    }
}