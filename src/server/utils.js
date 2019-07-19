import firebase from './firebase.config'
export const auth = firebase.auth()
export const db = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export const createUserProfileDoc = async (user, data) => {
  if (!user) return
  const userRef = db.doc(`users/${user.uid}`)
  const snapShot = await userRef.get()
  if (!snapShot.exists) {
    const { displayName, email } = user
    const userDoc = {
      displayName,
      email,
      createdAt: new Date(),
      ...data
    }
    try {
      await userRef.set(userDoc)
    } catch (error) {
      console.log(error.message)
    }
  }
  return userRef
}
