import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBTjZATUA_yAJEplv7MP8yC6FDnmAieCLU",
  authDomain: "idrive-storage-615e0.firebaseapp.com",
  projectId: "idrive-storage-615e0",
  storageBucket: "idrive-storage-615e0.appspot.com",
  messagingSenderId: "103731101836",
  appId: "1:103731101836:web:9cce734d7a34242ee7bba9",
  measurementId: "G-3NPDZ0JBXY",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const projectStorage = firebaseApp.storage();
const projectFirestore = firebaseApp.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
const auth = firebase.auth();

export { projectStorage, projectFirestore, timestamp, auth };
