import React, { createContext } from "react";
const AuthContextProvider = createContext();
const AuthProvider = ({ children }) => {
  const authValue = {};
  return (
    <AuthContextProvider.Provider value={authValue}>
      {children}
    </AuthContextProvider.Provider>
  );
};

export default AuthProvider;
