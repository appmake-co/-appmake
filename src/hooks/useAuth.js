import React, { useContext, useEffect, useState } from "react";
import { useAlerts, useLoaders } from "../index";
import { ApiContext, AuthContext } from "../index";
import { useRouter } from "next/router";
import { deleteCookie, setCookie } from "cookies-next";

const useAuth = (props) => {
  const { api } = useContext(ApiContext) || {};

  const router = useRouter();
  const { showLoading, hideLoading } = useLoaders();
  const { showAlertError } = useAlerts();

  const {
    authenticated,
    setAuthenticated,
    currentUser,
    setCurrentUser,
    setToken,
    setGoogleAuthToken,
  } = useContext(AuthContext);

  const [user, setUser] = useState({});

  const handleChange = (ev) => {
    const { name } = ev.target;
    let value =
      ev.target.type === "checkbox" ? ev.target.checked : ev.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const fetchMe = async (token) => {
    try {
      let resp = await api.get("/api/v1/app/users/me", {
        params: {
          token: token,
        },
      });
      if (resp && resp.data) {
        setCurrentUser(resp.data);
      }
      return resp.data;
    } catch (e) {
      console.log("Auth error", e);
      if (e?.status === 401 || e?.status === 404 || typeof e === undefined) {
        showAlertError("Please sign in to continue.");
        deleteCookie("authToken");
        router.push("/login");
      }
    }
  };

  const updateMe = async (user) => {
    showLoading();
    let resp = await api.put(`/api/v1/app/users/${user.id}`, {
      user,
    });
    setCurrentUser(resp.data);
    hideLoading();
    return resp.data;
  };

  const loginUser = async (user) => {
    try {
      showLoading();
      let resp = await api.post("/api/v1/login", {
        user,
      });
      if (resp.data) {
        setCurrentUser(resp.data);
        setAuthenticated(true);
        setTokens(resp.data);
        router.push("/app/dashboard");
        return resp.data;
      } else {
        return false;
      }
    } catch (e) {
      console.log(e);
      showAlertError("Your email or password is incorrect");
    } finally {
      hideLoading();
    }
  };

  const signupUser = async (user) => {
    try {
      showLoading();
      let resp = await api.post("/api/v1/signup", {
        user,
      });
      if (resp.data) {
        setTokens(resp.data);
        return resp.data;
      } else {
        return false;
      }
    } catch (e) {
      showAlertError("A user with this email may already exist");
    } finally {
      hideLoading();
    }
  };

  const resetPassword = async (password, token) => {
    try {
      showLoading();
      let resp = await api.post("/api/v1/reset_password", {
        password: password,
        change_password_token: token,
      });
      if (resp?.data?.id) {
        setCurrentUser(resp.data);
        router.push("/app/dashboard");
        return resp.data;
      } else {
        return false;
      }
    } catch (e) {
      showAlertError("The token has expired or is no longer valid");
    } finally {
      hideLoading();
    }
  };

  const forgotPassword = async (email) => {
    try {
      showLoading();
      await api.post("/api/v1/forgot_password", {
        email,
      });
      return true;
    } catch (e) {
      showAlertError("A user with that email could not be found");
      return false;
    } finally {
      hideLoading();
    }
  };

  const magicLink = async (email, redirectUrl) => {
    try {
      showLoading();
      let resp = await api.post("/api/v1/magic_link", {
        email,
        redirect_url: redirectUrl,
      });
      return true;
    } catch (e) {
      showAlertError("A user with that email could not be found");
      return false;
    } finally {
      hideLoading();
    }
  };

  const logoutUser = () => {
    setCurrentUser(null);
    setAuthenticated(null);
    deleteCookie("authToken");
    deleteCookie("googleAuthToken");
    router.push("/");
  };

  const authenticateFromToken = (token) => {
    if (token) {
      setToken(token);
    } else {
      return false;
    }
  };

  const googleLogin = async (user) => {
    try {
      showLoading();
      let resp = await api.post("/api/v1/google/login", {
        user,
      });
      if (resp?.data) {
        setTokens(resp.data);
        setCurrentUser(resp.data);
        return resp.data;
      } else {
        return false;
      }
    } catch (e) {
      console.log(e);
    } finally {
      hideLoading();
    }
  };

  const googleSignup = async (user) => {
    try {
      showLoading();
      let resp = await api.post("/api/v1/google/signup", {
        user,
      });
      if (resp?.data) {
        setTokens(resp.data);
        setCurrentUser(resp.data);
        return resp.data;
      } else {
        return false;
      }
    } catch (e) {
      console.log(e);
    } finally {
      hideLoading();
    }
  };

  const fetchGoogleToken = async () => {
    let resp = await api.get("/api/v1/app/users/refresh_token");
    if (resp?.data?.authentications) {
      let googleAuth = resp.data.authentications.find(
        (auth) => auth.provider === "google"
      );
      setGoogleAuthToken(googleAuth.token);
      setCookie("googleAuthToken", googleAuth.token);
    }
  };

  const setTokens = (user) => {
    setToken(user.token);
    setAuthenticated(true);
    setCookie("authToken", user.token);
    const googleAuth = user.authentications.find(
      (auth) => auth.provider === "google"
    );
    if (googleAuth) {
      let { token } = googleAuth;
      setGoogleAuthToken(token);
    }
  };

  useEffect(() => {
    if (currentUser && !authenticated) {
      setTokens(currentUser);
    }
  }, [currentUser]);

  return {
    currentUser,
    user,
    handleChange,
    fetchMe,
    updateMe,
    loginUser,
    signupUser,
    logoutUser,
    resetPassword,
    forgotPassword,
    googleLogin,
    googleSignup,
    authenticateFromToken,
    fetchGoogleToken,
  };
};

export default useAuth;
