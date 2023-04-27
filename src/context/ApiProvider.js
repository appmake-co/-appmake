import React from "react";
import ApiContext from "./ApiContext";
import axios from "axios";
import { getCookie } from "cookies-next";

const ApiProvider = ({ url, children }) => {
  let headers = {
    "Content-Type": "application/json",
  };

  const api = axios.create({
    baseURL: url,
    headers: headers,
    timeout: 60000,
  });

  api.interceptors.request.use((config) => {
    const token = getCookie("authToken");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  });

  api.interceptors.response.use(
    (resp) => Promise.resolve(resp.data),
    (error) => Promise.reject(error.response)
  );

  const value = {
    api,
  };

  return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
};

export default ApiProvider;
