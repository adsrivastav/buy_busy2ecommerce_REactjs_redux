import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { browserSessionPersistence, getAuth, setPersistence } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBdeY-9Or6vptOa20UtxXTT5sZ43BB1wCk",
  authDomain: "buybusy-4487a.firebaseapp.com",
  projectId: "buybusy-4487a",
  storageBucket: "buybusy-4487a.appspot.com",
  messagingSenderId: "586959548945",
  appId: "1:586959548945:web:7b24ecd4f169ee9e12f7b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

// Enable session persistence
setPersistence(auth, browserSessionPersistence);