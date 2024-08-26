import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA2NV0Mhw6yThgavD1mc7AedIUWII0XqQE",
  authDomain: "maltimart-874a1.firebaseapp.com",
  projectId: "maltimart-874a1",
  storageBucket: "maltimart-874a1.appspot.com",
  messagingSenderId: "682428536080",
  appId: "1:682428536080:web:98b67d05f74bd5d9360195"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export const db = getFirestore(app);
export const storge = getStorage(app);

export default app;

