import React from "react";
import { IconButton } from "@mui/material";
import { AlignLeft } from "react-feather";

const CellParagraph = ({ value, handleClick, ...props }) => {
  return (
    <IconButton onClick={handleClick}>
      <AlignLeft size={20} />
    </IconButton>
  );
};

export default CellParagraph;

const sx = {
  root: {},
};
