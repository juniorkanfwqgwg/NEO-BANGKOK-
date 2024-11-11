
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyD9AqSRvvpU08EG__CrowUgNEZKm74Grr4",
    authDomain: "cde-awkn-web2024.firebaseapp.com",    
    projectId: "cde-awkn-web2024",
    storageBucket: "cde-awkn-web2024.firebasestorage.app",
    messagingSenderId: "312314988926",
    appId: "1:312314988926:web:4241b12cc1581f4b0f0b2f",
    measurementId: "G-JBTYDYKJNE"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export async function sendStickerData(stickerId) {
    try {
        const docRef = await addDoc(collection(db, "stickers"), {
            stickerId: stickerId,
            timestamp: serverTimestamp()
        });

        window.location.reload();
    } catch (error) {
        console.error("Error sending sticker data to Firebase:", error);
        alert("Failed to send sticker data.");
    }
}