import React from "react";
import { Box } from "@mui/material";

const Panel = ({ children, p = 2, my = 1, styles = {}, ...props }) => {
  return (
    <Box
      p={p}
      my={my}
      sx={{
        ...sx.root,
        ...styles,
      }}
    >
      {children}
    </Box>
  );
};

export default Panel;

const sx = {
  root: {
    width: "100%",
    borderRadius: (theme) => theme.shape.borderRadius,
    backgroundColor: "common.white",
    border: "1px solid",
    borderColor: "common.border",
  },
};
