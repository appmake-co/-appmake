import React from "react";
import { Label } from "../../index";

const CellBoolean = ({ value, ...props }) => {
  return <Label label={value ? "True" : "False"} />;
};

export default CellBoolean;

const sx = {};
