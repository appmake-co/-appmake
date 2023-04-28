import React from "react";
import { Button } from "@mui/material";

const FieldBoolean = ({ value, ...props }) => {
  return (
    <Button size="small" color="primary" sx={sx.button}>
      {value}
    </Button>
  );
};

export default FieldBoolean;

const sx = {
  button: {
    textTransform: "none",
    fontFamily: (theme) => theme.typography.body3.fontFamily,
    letterSpacing: 0,
  },
  buttonTrue: {
    color: "success.dark",
    backgroundColor: "success.light",
    "&:hover": {
      backgroundColor: "success.light",
    },
  },
  buttonFalse: {
    color: "error.dark",
    backgroundColor: "error.light",
    "&:hover": {
      backgroundColor: "error.light",
    },
  },
};
