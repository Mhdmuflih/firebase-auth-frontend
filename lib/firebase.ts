import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyArOwz95ImC7DSirtw6VBO4-GfvNtHmFYU",
  authDomain: "machine-task-7159a.firebaseapp.com",
  projectId: "machine-task-7159a",
  storageBucket: "machine-task-7159a.firebasestorage.app",
  messagingSenderId: "621802461102",
  appId: "1:621802461102:web:4cdd50515b102e969dda3f",
  measurementId: "G-5CVMDS3SPQ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);