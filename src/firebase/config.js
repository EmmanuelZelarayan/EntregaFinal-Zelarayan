import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCy_BbMfEn-_4UOlMmX4JqoCSya_6rHpDE",
  authDomain: "proven-mystery-208222.firebaseapp.com",
  projectId: "proven-mystery-208222",
  storageBucket: "proven-mystery-208222.appspot.com",
  messagingSenderId: "43360842100",
  appId: "1:43360842100:web:58f6cb0db4e4b6a60a7c21",
  measurementId: "G-DPNXYS6F7W"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

