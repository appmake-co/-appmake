import React from "react";
import { useEffect } from "react";
import { useAuth } from "../index";
import { getCookie } from "cookies-next";

const AuthFromCookie = ({ children }) => {
  const { fetchMe, currentUser, authenticateFromToken } = useAuth();

  useEffect(() => {
    let authToken = getCookie("authToken");
    if (authToken) {
      authenticateFromToken(authToken);
      if (!currentUser) {
        fetchMe(authToken);
      }
    }
  }, []);

  return null;
};

export default AuthFromCookie;
