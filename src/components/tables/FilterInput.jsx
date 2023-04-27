import React from "react";
import { Box, Typography } from "@mui/material";

const FilterInput = ({ label, children, spacer = true, ...props }) => {
  return (
    <Box sx={sx.inputField}>
      <Box sx={sx.inputLabel}>
        <Typography variant="caption" color="textSecondary">
          {label}
        </Typography>
      </Box>
      <Box sx={sx.input}>{children}</Box>
    </Box>
  );
};

export default FilterInput;

const sx = {
  inputField: {
    width: "100%",
    py: 0.5,
    px: 0,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  inputLabel: {
    minWidth: "100px",
  },
  input: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  spacer: {
    width: 4,
  },
};
