import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBKGC6xvIWi-8w3-5AEHmzOp5bXH0ZMu0o",
    authDomain: "testtask-bf1f7.firebaseapp.com",
    databaseURL: "https://testtask-bf1f7.firebaseio.com",
    projectId: "testtask-bf1f7",
    storageBucket: "testtask-bf1f7.appspot.com",
    messagingSenderId: "803841005192",
    appId: "1:803841005192:web:9740d3e95258e35137313d"
};
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth;
export const db = firebase.firestore();