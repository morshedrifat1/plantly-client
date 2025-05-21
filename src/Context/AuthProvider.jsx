import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { auth } from "../firebase.init";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const AuthProvider = ({ children }) => {
    const [user,setUser] = useState(null)
  const provider = new GoogleAuthProvider();
  const userSignup = (email, password) => {
    return createUserWithEmailAndPassword (auth, email, password);
  };
  const userLogin = (email, password) => {
    console.log(email,password);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const userGoogleSignIn = () => {
    return signInWithPopup(auth, provider);
  };
  const userSignout = () => {
    setUser(null)
    return signOut(auth);
  };
  const passwordReset = (email) =>{
    return sendPasswordResetEmail(auth,email);
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser)
      } else {
        // User is signed out
      }
    });

    return ()=>{
        unSubscribe()
    }
  }, []);
  const userInfo = {
    user,
    userSignup,
    userLogin,
    userGoogleSignIn,
    userSignout,
    passwordReset
  };
  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
