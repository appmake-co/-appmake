import React, { useContext } from "react";
import { AppContext } from "../index";

const useAlerts = (props) => {
  const { setAlert } = useContext(AppContext);

  const alert = (message) => {
    setAlert(message);
  };

  return {
    alert,
  };
};

export default useAlerts;
