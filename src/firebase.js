import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAyxiPv0bTHDLRBgn4bt_KVpE90o9-XxEo",
    authDomain: "kubapic.firebaseapp.com",
    projectId: "kubapic",
    storageBucket: "kubapic.appspot.com",
    messagingSenderId: "578794540559",
    appId: "1:578794540559:web:b118e3c5db0570ffb5dd7a"
  };

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app) 