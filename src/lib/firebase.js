import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDvcBK1E-hTvXRS36d83833aFZ_JrnsEtk",
  authDomain: "react-chat-app-89b1e.firebaseapp.com",
  projectId: "react-chat-app-89b1e",
  storageBucket: "react-chat-app-89b1e.appspot.com",
  messagingSenderId: "222417254497",
  appId: "1:222417254497:web:cf695119d38ecab243d220",
};

const app = initializeApp(firebaseConfig);
console.log(app);


export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()


