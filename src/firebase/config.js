import { initializeApp } from "firebase/app";
import { getFirestore, Timestamp } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBabDWtv2cSbYLMIDSjqf5HQ0PljCWIPUU",

  authDomain: "marave-portfolio.firebaseapp.com",

  projectId: "marave-portfolio",

  storageBucket: "marave-portfolio.appspot.com",

  messagingSenderId: "393831752307",

  appId: "1:393831752307:web:f17f2da937009cc9628006",
};

const app = initializeApp(firebaseConfig);
const projectStorage = getStorage();
const projectFirestore = getFirestore(app);

const timeStamp = Timestamp;

export { projectStorage, projectFirestore, timeStamp };
