// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
  apiKey: "AIzaSyAWZLI8W4bluqC69DNcltiTCSwRXi6klXg",
  authDomain: "netflixgpt-ada83.firebaseapp.com",
  projectId: "netflixgpt-ada83",
  storageBucket: "netflixgpt-ada83.firebasestorage.app",
  messagingSenderId: "855373287176",
  appId: "1:855373287176:web:c6531c67dd00c4acc8a6bd",
  measurementId: "G-QK3RESSZ2H"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth }; 