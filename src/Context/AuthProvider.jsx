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
  const [loader,setLoader] = useState(true)
    const [user,setUser] = useState(null)
  const provider = new GoogleAuthProvider();
  const userSignup = (email, password) => {
    setLoader(true)
    return createUserWithEmailAndPassword (auth, email, password);
  };
  const userLogin = (email, password) => {
    setLoader(true)
    return signInWithEmailAndPassword(auth, email, password);
  };
  const userGoogleSignIn = () => {
    setLoader(true)
    return signInWithPopup(auth, provider);
  };
  const userSignout = () => {
    setLoader(true)
    setUser(null)
    return signOut(auth);
  };
  const passwordReset = (email) =>{
    setLoader(true)
    return sendPasswordResetEmail(auth,email);
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setLoader(false)
        setUser(currentUser)
      } else {
        setLoader(false)
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
    passwordReset,
    loader
  };
  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
