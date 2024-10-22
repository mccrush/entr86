// import firebase from "firebase/app"
// import "firebase/auth"
// import "firebase/firestore"
// import "firebase/storage"
// import apiKey from '../apiKey'

// const firebaseConfig = {
//   apiKey,
//   authDomain: "enter-e221d.firebaseapp.com",
//   databaseURL: "https://enter-e221d.firebaseio.com",
//   projectId: "enter-e221d",
//   storageBucket: "enter-e221d.appspot.com",
//   messagingSenderId: "623507782585",
//   appId: "1:623507782585:web:8e325a582c84cd47ffd468",
//   measurementId: "G-EG4N6S9PK4"
// };

// firebase.initializeApp(firebaseConfig);
// export const db = firebase.firestore();
// export const auth = firebase.auth();
// export const storage = firebase.storage();

//
import { initializeApp } from 'firebase/app'
import apiKey from './../apiKey'

const firebaseConfig = {
  apiKey,
  authDomain: "enter-e221d.firebaseapp.com",
  databaseURL: "https://enter-e221d.firebaseio.com",
  projectId: "enter-e221d",
  storageBucket: "enter-e221d.appspot.com",
  messagingSenderId: "623507782585",
  appId: "1:623507782585:web:8e325a582c84cd47ffd468",
  measurementId: "G-EG4N6S9PK4"
};

const fireApp = initializeApp(firebaseConfig)

export default fireApp