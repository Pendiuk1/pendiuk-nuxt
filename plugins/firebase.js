import { initializeApp, getApps } from "firebase/app"
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyBHXHgg-LafXxm125t0VY5H5CNP9mnpQ-w",
    authDomain: "mywebsite-49c30.firebaseapp.com",
    projectId: "mywebsite-49c30",
    storageBucket: "mywebsite-49c30.appspot.com",
    messagingSenderId: "357468880682",
    appId: "1:357468880682:web:2f2b20f654c4a74e306853",
  }
let firebaseApp;
const apps = getApps()
if (!apps.length) {
    firebaseApp = initializeApp(firebaseConfig)
} else {
    firebaseApp = apps[0]
}
const db = getFirestore(firebaseApp, {})
export { db }