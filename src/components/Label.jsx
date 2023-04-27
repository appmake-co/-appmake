import React from "react";
import { Chip } from "@mui/material";

const Label = ({ label = "", styles = {}, ...rest }) => {
  return (
    <Chip
      label={label}
      sx={{
        ...sx.chip,
        ...styles,
      }}
      size="small"
    />
  );
};

export default Label;

const sx = {
  chip: {
    mt: 0,
    mr: 0.5,
    mb: 0.5,
    ml: 0,
    color: "text.secondary",
    textTransform: "uppercase",
    characterSpacing: "1em",
    fontSize: 11,
    fontWeight: 500,
    fontFamily: "caption.fontFamily",
    letterSpacing: "0.05em",
    border: "1px solid",
    borderColor: "common.white",
  },
};
