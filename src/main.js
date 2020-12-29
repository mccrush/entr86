import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore"; // DB
import "firebase/storage"; // File

import apiKey from '../apiKey'
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

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();

let app = "";
firebase.auth().onAuthStateChanged((user) => {
  if (!app) {
    app = createApp(App).use(store).use(router).mount('#app')
  }
  if (user) {
    //store.dispatch("logIn");
  }
})