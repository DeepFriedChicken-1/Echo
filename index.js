// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcYlqDcUnOVD4RUAvBZFnnQ3u-EiHLIyE",
  authDomain: "chatapp-4e313.firebaseapp.com",
  projectId: "chatapp-4e313",
  storageBucket: "chatapp-4e313.appspot.com",
  messagingSenderId: "301353370002",
  appId: "1:301353370002:web:15e9c5a812f028be44414b",
  measurementId: "G-Z9K58VT31S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);