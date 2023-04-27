import React, { useState } from "react";
import AppContext from "./AppContext";

const AppProvider = ({ children, ...rest }) => {
  const [currentUser, setCurrentUser] = useState();
  const [accessToken, setAccessToken] = useState();

  const [alert, setAlert] = useState();
  const [loading, setLoading] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const isLoading = () => setLoading(true);
  const isLoaded = () => setLoading(false);

  const initValue = {
    accessToken,
    setAccessToken,

    alert,
    setAlert,
    currentUser,
    setCurrentUser,

    loading,
    isLoading,
    isLoaded,

    menuOpen,
    setMenuOpen,
    toggleMenu,
  };

  return (
    <AppContext.Provider value={initValue}>{children}</AppContext.Provider>
  );
};

export default AppProvider;
