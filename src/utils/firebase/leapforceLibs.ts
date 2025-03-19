// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import firebaseConfig from './config'

const firebaseApp = initializeApp(firebaseConfig)
const firestoreDatabase = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp)

export default { firebaseApp, firestoreDatabase, auth }
