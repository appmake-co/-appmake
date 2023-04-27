import React from "react";
import { Chip } from "@mui/material";

const CellArray = ({ value: values, ...props }) => {
  return Array.isArray(values) && values.length > 0
    ? values.map((value, index) => (
        <Chip key={index} label={value} sx={sx.chip} size="small" />
      ))
    : null;
};

export default CellArray;

const sx = {
  chip: {
    mt: 0,
    mr: 0.5,
    mb: 0.5,
    ml: 0,
    textTransform: "none",
    fontFamily: (theme) => theme.typography.body3.fontFamily,
    letterSpacing: 0,
  },
};
