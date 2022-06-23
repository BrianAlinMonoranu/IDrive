import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyBcVqqvOvmEQFGWDabSqwtvKgJw_6azFCQ",
    authDomain: "idrive-eb75d.firebaseapp.com",
    projectId: "idrive-eb75d",
    storageBucket: "idrive-eb75d.appspot.com",
    messagingSenderId: "421251816914",
    appId: "1:421251816914:web:6543902bb3b20cdbcffc0b",
    measurementId: "G-G0RCV19JXG"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };