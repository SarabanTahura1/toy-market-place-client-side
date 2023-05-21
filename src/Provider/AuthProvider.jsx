import React, { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "firebase/auth";
import { app } from "../../firebase.config";
export const AuthContextProvider = createContext();

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);

  // New account create
  const newAccountCreate = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //update profile
  const profileUpdate = (user, name, url) => {
    return updateProfile(user, {
      displayName: name,
      photoURL: url,
    });
  };

  const authValue = { profileUpdate, newAccountCreate };

  return (
    <AuthContextProvider.Provider value={authValue}>
      {children}
    </AuthContextProvider.Provider>
  );
};

export default AuthProvider;
