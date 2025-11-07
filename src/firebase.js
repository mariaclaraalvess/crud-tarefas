import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAsDgNB6cgkXFizgBndaG36-tRSOqm_Bus",
    authDomain: "crud-tarefas-bca9b.firebaseapp.com",
    projectId: "crud-tarefas-bca9b",
    storageBucket: "crud-tarefas-bca9b.firebasestorage.app",
    messagingSenderId: "606476128526",
    appId: "1:606476128526:web:a601a1f520a3ba297d075f"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Auth
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const loginGoogle = () => signInWithPopup(auth, provider);
export const logout = () => signOut(auth);

// Firestore (Banco)
export const db = getFirestore(app);
