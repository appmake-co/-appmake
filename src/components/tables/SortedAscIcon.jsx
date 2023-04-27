import React from "react";
import { ExpandLess } from "@mui/icons-material";

const AppmakeSortedAscendingIcon = () => {
  return <ExpandLess sx={sx.sortIcon} />;
};

export default AppmakeSortedAscendingIcon;

const sx = {
  sortIcon: {
    color: "text.secondary",
  },
};
