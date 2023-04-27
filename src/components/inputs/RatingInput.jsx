import React from "react";
import { Box, alpha, Typography } from "@mui/material";
import Rating from "@mui/material/Rating";

const RatingInput = ({
  label,
  value,
  name,
  handleChange,
  readOnly = false,
  size,
  ...props
}) => {
  const onChange = (event, value) => {
    handleChange({
      target: {
        name,
        value,
      },
    });
  };

  return (
    <Box sx={sx.root}>
      {label && (
        <Typography variant="caption" color="primary">
          {label}
        </Typography>
      )}
      <Box sx={sx.input}>
        <Rating
          name={name}
          readOnly={readOnly}
          sx={sx.rating}
          onChange={onChange}
          size={size}
          value={parseInt(value)}
        />
      </Box>
    </Box>
  );
};

export default RatingInput;

const sx = {
  input: {
    pt: 1,
    pr: 2,
    pb: 0.5,
    pl: 2,
    backgroundColor: "common.white",
    borderRadius: 4,
    border: (theme) => `1px solid ${theme.palette.common.inputBorder}`,
    boxShadow: `rgb(0 0 0 / 5%) 0px 2px 4px !important`,
    fontSize: 15,
    "&:focus": {
      boxShadow: `${alpha("#999999", 0.25)} 0 0 0 0.2rem`,
      borderColor: "primary.light",
    },
  },
  rating: {
    color: "primary.main",
  },
};
