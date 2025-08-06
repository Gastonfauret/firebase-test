// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYiod8D_LJFEJwLSz8t65EQ-6xkLIiGD0",
  authDomain: "firstfirebaseapp-ce426.firebaseapp.com",
  projectId: "firstfirebaseapp-ce426",
  storageBucket: "firstfirebaseapp-ce426.firebasestorage.app",
  messagingSenderId: "981731777943",
  appId: "1:981731777943:web:3c59a7b44a61ea9f99f8d2",
  measurementId: "G-9Y1SSMGL3M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);