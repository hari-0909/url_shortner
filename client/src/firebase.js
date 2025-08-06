import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDGGpibQAdlSDRAGY3z35y01VeXIOXxjgM",
  authDomain: "shortly-auth-fa089.firebaseapp.com",
  projectId: "shortly-auth-fa089",
  storageBucket: "shortly-auth-fa089.firebasestorage.app",
  messagingSenderId: "480823949442",
  appId: "1:480823949442:web:8808bbea557d340b6b1c9b",
  measurementId: "G-R34MP9F5ZW"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };