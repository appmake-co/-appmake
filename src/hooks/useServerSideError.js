import React, { useState, useEffect } from "react";

const useServerSideError = ({ errors, name }) => {
  const [error, setError] = useState();

  const clearError = () => {
    setError(null);
  };

  useEffect(() => {
    if (errors && errors[name]) {
      setError(`${name} ${errors[name]}`);
    }
  }, [errors]);

  return {
    error,
    clearError,
  };
};

export default useServerSideError;
