// firebase.js

import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBgZUjKHxOIrxnpb8BVs-k6vkEmeMOoSBk",
  authDomain: "banglauifont-next.firebaseapp.com",
  databaseURL: "https://banglauifont-next-default-rtdb.firebaseio.com",
  projectId: "banglauifont-next",
  storageBucket: "banglauifont-next.appspot.com",
  messagingSenderId: "585970768557",
  appId: "1:585970768557:web:da428169ce19f03f1bc424",
  measurementId: "G-SF1N89W9JT",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
