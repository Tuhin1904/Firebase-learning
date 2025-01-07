import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC6WSxof6RVnwUvzfHb3rOnJM_VgvdKLis',
  authDomain: 'finance-tracker-21b09.firebaseapp.com',
  projectId: 'finance-tracker-21b09',
  storageBucket: 'finance-tracker-21b09.firebasestorage.app',
  messagingSenderId: '117262497385',
  appId: '1:117262497385:web:f19cfb8ffa5e7a27e214f8',
  measurementId: 'G-M09RB7BLC5',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc, createUserWithEmailAndPassword, signInWithEmailAndPassword };
