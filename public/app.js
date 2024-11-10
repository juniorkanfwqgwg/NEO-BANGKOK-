// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

// ตั้งค่า Firebase
const firebaseConfig = {
    apiKey: "AIzaSyC0o6yhCvX9EvfF1GVkJUsKBSaO6vvXFHo",
    authDomain: "ar-awkn2024-cde.firebaseapp.com",
    projectId: "ar-awkn2024-cde",
    storageBucket: "ar-awkn2024-cde.firebasestorage.app",
    messagingSenderId: "958609080092",
    appId: "1:958609080092:web:503c39e9146aa825d1c4d9",
    measurementId: "G-7BCME79FP7"
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
