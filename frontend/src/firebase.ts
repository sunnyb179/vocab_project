// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDdZIBxAr-oMKzsUUOo_Kzp7BTmXMTsd0Y",
  authDomain: "vocab-project-fe244.firebaseapp.com",
  projectId: "vocab-project-fe244",
  storageBucket: "vocab-project-fe244.firebasestorage.app",
  messagingSenderId: "268918438554",
  appId: "1:268918438554:web:b4ada6ac47e770d87c7d23",
  measurementId: "G-X413D3QW6M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
