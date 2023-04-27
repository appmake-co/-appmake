import React from "react";
import { Typography } from "@mui/material";
import { truncate } from "../../lib/helpers";

const CellTextLabel = ({ value, ...props }) => {
  return (
    <Typography sx={sx.text} variant="body3">
      {truncate(value, 15)}
    </Typography>
  );
};

export default CellTextLabel;

const sx = {
  text: {
    whiteSpace: "nowrap",
  },
};
