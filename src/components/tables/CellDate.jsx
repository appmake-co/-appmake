import React from "react";
import { Typography } from "@mui/material";
import moment from "moment";

const CellDate = ({ value, ...props }) => {
  let formattedValue = moment(value).format("MM/DD/YYYY");
  return <Typography variant="body3">{formattedValue}</Typography>;
};

export default CellDate;

const sx = {
  root: {},
};
