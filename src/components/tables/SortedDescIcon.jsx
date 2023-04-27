import React from "react";
import { ExpandMore } from "@mui/icons-material";

const SortedDescIcon = () => {
  return <ExpandMore sx={sx.sortIcon} />;
};

export default SortedDescIcon;

const sx = {
  sortIcon: {
    color: "text.secondary",
  },
};
