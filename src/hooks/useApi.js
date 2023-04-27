import React, { useContext } from "react";
import { ApiContext } from "../index";

const useApi = () => {
  const { api } = useContext(ApiContext);
  return {
    api,
  };
};

export default useApi;
