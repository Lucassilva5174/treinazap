import firebase from 'firebase';	

const firebaseConfig = {	
    apiKey: "AIzaSyBld4CHXOn6F4kXpUuJ8kWoXEGnQBtcloA",
    authDomain: "treinacloud1.firebaseapp.com",
    projectId: "treinacloud1",
    storageBucket: "treinacloud1.appspot.com",
    messagingSenderId: "1083430006868",
    appId: "1:1083430006868:web:a06939676a1876b00a7dc1"
};	

const firebaseApp = firebase.initializeApp(firebaseConfig);	

const db = firebaseApp.firestore();	
const auth = firebase.auth();	
const provider = new firebase.auth.GoogleAuthProvider();	
const storage = firebase.storage();

export { auth, provider, storage, firebase };	
export default db;  
