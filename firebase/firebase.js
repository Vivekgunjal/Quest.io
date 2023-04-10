import { getApp, getApps, initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";




const firebaseConfig = {
  apiKey: "AIzaSyBqgeC-Uw3oHZgQD6-n3CX47BZ5p4xaX-8",
  authDomain: "hmbiz2.firebaseapp.com",
  projectId: "hmbiz2",
  storageBucket: "hmbiz2.appspot.com",
  messagingSenderId: "27791935278",
  appId: "1:27791935278:web:f1a86b2ad4c8e4995edcbf"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export {app, db, storage};