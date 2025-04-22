import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAq68k6yLd5oddDFkt0BAr7c2LROZSniN8",
    authDomain: "codernike-ac6cc.firebaseapp.com",
    projectId: "codernike-ac6cc",
    storageBucket: "codernike-ac6cc.firebasestorage.app",
    messagingSenderId: "518079189933",
    appId: "1:518079189933:web:36c2ccf86614bb0c264724"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);