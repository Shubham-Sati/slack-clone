// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCqoLoEfqUzYdVkIHYe761vCvN73AgAjGQ",
    authDomain: "slack-clone-99f24.firebaseapp.com",
    projectId: "slack-clone-99f24",
    storageBucket: "slack-clone-99f24.appspot.com",
    messagingSenderId: "961308369214",
    appId: "1:961308369214:web:e2faba6bf86ea98d16cc6f",
    measurementId: "G-50J14W3LC6"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth , provider };
export default db;

