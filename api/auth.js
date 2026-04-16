import { auth } from "./firebase.js";

export function login(){
  const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
    }

    export function logout(){
      auth.signOut();
      }