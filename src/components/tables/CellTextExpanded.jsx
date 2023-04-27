import React from "react";
import { Typography } from "@mui/material";

const CellTextExpanded = ({ value, ...props }) => {
  return (
    <Typography variant="body3" sx={sx.text}>
      {value}
    </Typography>
  );
};

export default CellTextExpanded;

const sx = {
  text: {
    whiteSpace: "pre-wrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    overflowWrap: "break-word",
  },
};
