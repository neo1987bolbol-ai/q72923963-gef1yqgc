// Test bed for https://stackoverflow.com/q/72923963

import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadString, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { getAuth, signInAnonymously } from "firebase/auth";

// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const firebaseConfig = {
  apiKey: "AIzaSyCvpYQu44zmRXA0XQkcxEuakyytRsnWXSc",
  authDomain: "stackoverflow.firebaseapp.com",
  databaseURL: "https://stackoverflow.firebaseio.com",
  projectId: "project-8080059325282098184",
  storageBucket: "project-8080059325282098184.appspot.com",
  messagingSenderId: "82293832823",
  appId: "1:82293832823:web:05cebea7daa24fd9675a72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
signInAnonymously(auth).then((cred) => {
  console.log(cred.user);
  const metadata = {
    contentType: "image/png",
    butts: "yeah",
    customMetadata: {
        butts: "image/png",
    },
  };
  const storageRef = ref(storage, "77151176.png");
  console.log('Starting upload');
  const image = new Uint8Array([137, 80, 78, 71, 13, 10, 26, 10, 0, 0, 0, 13, 73, 72, 68, 82, 0, 0, 0, 5, 0, 0, 0, 5, 8, 6, 0, 0, 0, 141, 111, 38, 229, 0, 0, 0, 28, 73, 68, 65, 84, 8, 215, 99, 248, 255, 255, 63, 195, 127, 6, 32, 5, 195, 32, 18, 132, 208, 49, 241, 130, 88, 205, 4, 0, 14, 245, 53, 203, 209, 142, 14, 31, 0, 0, 0, 0, 73, 69, 78, 68, 174, 66, 96, 130]);

  uploadBytesResumable(storageRef, image, metadata).then((snapshot) => {
    console.log('Uploaded bytes and metadata');
  }).catch((e) => {
    console.error(e);
  });
})