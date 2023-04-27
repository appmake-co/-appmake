import React, { useState } from "react";
import AuthContext from "./AuthContext";

const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState();
  const [currentUser, setCurrentUser] = useState();
  const [token, setToken] = useState();
  const [googleAuthToken, setGoogleAuthToken] = useState();

  const value = {
    authenticated,
    setAuthenticated,
    currentUser,
    setCurrentUser,
    token,
    setToken,
    googleAuthToken,
    setGoogleAuthToken,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
