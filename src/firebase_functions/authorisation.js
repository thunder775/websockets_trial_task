import {auth} from "../services/firebase";

export function signUp(email, password) {
    return auth().createUserWithEmailAndPassword(email, password);
    // return auth().createUserWithEmailAndPassword("123@gmail.com", "password");
}

export function signIn(email, password) {
    return auth().signInWithEmailAndPassword(email, password);
    // return auth().signInWithEmailAndPassword("123@gmail.com", "password");
}

export function signOut(email, password) {
    return auth().signOut();
}