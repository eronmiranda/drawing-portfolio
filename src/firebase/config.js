// Import the functions you need from the SDKs you need

import {initializeApp} from "firebase/app";
import { getFirestore, Timestamp } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBabDWtv2cSbYLMIDSjqf5HQ0PljCWIPUU",

  authDomain: "marave-portfolio.firebaseapp.com",

  projectId: "marave-portfolio",

  storageBucket: "marave-portfolio.appspot.com",

  messagingSenderId: "393831752307",

  appId: "1:393831752307:web:f17f2da937009cc9628006"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
const projectStorage = getStorage();
const projectFirestore = getFirestore(app);

const timeStamp = Timestamp;

export {projectStorage, projectFirestore, timeStamp};
