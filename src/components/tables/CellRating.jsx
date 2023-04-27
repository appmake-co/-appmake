import React from "react";
import Rating from "@mui/material/Rating";

const CellRating = ({ value, ...props }) => {
  return <Rating readOnly sx={sx.rating} size={"small"} value={value} />;
};

export default CellRating;

const sx = {
  rating: {
    color: "primary.main",
  },
};
