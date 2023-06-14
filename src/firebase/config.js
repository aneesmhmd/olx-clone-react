import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDnbgSSEt1dtAZriNb3dWujOZT5wLhfoQc",
    authDomain: "fir-4c03d.firebaseapp.com",
    projectId: "fir-4c03d",
    storageBucket: "fir-4c03d.appspot.com",
    messagingSenderId: "856284488215",
    appId: "1:856284488215:web:6c7be30ee9ca6728c6b252",
    measurementId: "G-F8CP7HTSL6"
  };

export default firebase.initializeApp(firebaseConfig)