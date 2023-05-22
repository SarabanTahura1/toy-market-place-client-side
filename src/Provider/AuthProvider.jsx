import React, { createContext, useEffect, useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../../firebase.config";
import Swal from "sweetalert2";
export const AuthContextProvider = createContext();

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const auth = getAuth(app);
  // Github & google provider
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  // New account create
  const newAccountCreate = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //update profile
  const profileUpdate = (user, name, url) => {
    setLoading(true);
    return updateProfile(user, {
      displayName: name,
      photoURL: url,
    });
  };

  //user login
  const userLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // google login
  const googleLogin = () => {
    setLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        Swal.fire({
          title: "success",
          text: "Google Login Successfully",
          icon: "success",
          confirmButtonText: "Ok",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // github login
  const githubLogin = () => {
    setLoading(true);
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        Swal.fire({
          title: "success",
          text: "Github Login Successfully",
          icon: "success",
          confirmButtonText: "Ok",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // logout

  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };
  // auth state observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authValue = {
    profileUpdate,
    newAccountCreate,
    userLogin,
    googleLogin,
    githubLogin,
    currentUser,
    logout,loading
  };

  return (
    <AuthContextProvider.Provider value={authValue}>
      {children}
    </AuthContextProvider.Provider>
  );
};

export default AuthProvider;
