import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyC5fNe8918V2_BEOnszOGpFJCjYZXoKceM",
  authDomain: "equiphealthproj.firebaseapp.com",
  databaseURL: "https://equiphealthproj-default-rtdb.firebaseio.com", // Realtime Database URL
  projectId: "equiphealthproj",
  storageBucket: "equiphealthproj.appspot.com",
  messagingSenderId: "423817188313",
  appId: "1:423817188313:web:966b2af1ca12680756ffc8",
  measurementId: "G-T9DF3DPRKH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Realtime Database
const db = getFirestore(app);
const database = getDatabase(app);

// Initialize Auth
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { db, database, auth, googleProvider };
