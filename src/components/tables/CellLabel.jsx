import React from "react";
import { Label } from "../../index";

const CellLabel = ({ value, ...props }) => {
  return <Label label={value} />;
};

export default CellLabel;

const sx = {};
