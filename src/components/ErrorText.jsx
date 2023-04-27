import React from "react";
import { Typography } from "@mui/material";

const ErrorText = ({ error, ...props }) => {
  return error ? (
    <Typography variant="caption" color="error" {...props}>
      {error}
    </Typography>
  ) : null;
};

export default ErrorText;
