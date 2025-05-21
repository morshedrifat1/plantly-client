// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDh7IpS8haps8X7y-bbPvd4THPYu1VCQBM",
  authDomain: "plantly-react-app.firebaseapp.com",
  projectId: "plantly-react-app",
  storageBucket: "plantly-react-app.firebasestorage.app",
  messagingSenderId: "281132992753",
  appId: "1:281132992753:web:fd3dc0a156df15960c8150",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
