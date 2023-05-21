import React, { createContext } from "react";
import { getAuth } from "firebase/auth";
import { app } from "../../firebase.config";
const AuthContextProvider = createContext();

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);


  const authValue = {};
  return (
    <AuthContextProvider.Provider value={authValue}>
      {children}
    </AuthContextProvider.Provider>
  );
};

export default AuthProvider;
