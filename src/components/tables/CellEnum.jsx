import React from "react";
import { Label } from "../../index";
import { truncate } from "../../lib/helpers";

const CellEnum = ({ value, ...props }) => {
  return <Label label={truncate(value, 15)} />;
};

export default CellEnum;

const sx = {
  text: {
    whiteSpace: "nowrap",
  },
};
