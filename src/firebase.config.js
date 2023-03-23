// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC5fddFrEi1PrcooylkNx_YoMIH9lu4aSA",
    authDomain: "house-marketplace-app-50c92.firebaseapp.com",
    projectId: "house-marketplace-app-50c92",
    storageBucket: "house-marketplace-app-50c92.appspot.com",
    messagingSenderId: "879236183706",
    appId: "1:879236183706:web:a4d6b3613d92fc9bfb5123",
    measurementId: "G-6ERTR0L59M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore()