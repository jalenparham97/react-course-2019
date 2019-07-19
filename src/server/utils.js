import firebase from './firebase.config'
export const auth = firebase.auth()
export const db = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
export const signInWithGoogle = () => auth.signInWithPopup(provider)
