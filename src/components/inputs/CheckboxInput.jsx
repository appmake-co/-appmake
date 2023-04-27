import React from "react";
import { Checkbox, Box, FormControlLabel, Typography } from "@mui/material";

const CheckboxInput = ({
  name,
  value,
  placeholder,
  label,
  handleChange,
  disableBorder = false,
  ...props
}) => {
  return (
    <Box>
      <Typography variant="caption" color="textSecondary">
        {label}
      </Typography>
      <Box
        sx={{
          ...sx.input,
          ...(!disableBorder && sx.border),
        }}
      >
        <FormControlLabel
          control={
            <Checkbox
              name={name}
              checked={value === true ? true : false}
              onChange={handleChange}
              value="true"
            />
          }
          label={
            <Typography variant="body2" color="textSecondary">
              {placeholder}
            </Typography>
          }
        />
      </Box>
    </Box>
  );
};

export default CheckboxInput;

const sx = {
  input: {
    display: "flex",
    direction: "column",
    fontSize: 15,
  },
  border: {
    backgroundColor: "common.white",
    border: (theme) => `1px solid ${theme.palette.common.inputBorder}`,
    boxShadow: `rgb(0 0 0 / 5%) 0px 2px 4px !important`,
    pt: 0.5,
    pr: 2,
    pb: 0.5,
    pl: 2,
    borderRadius: 4,
  },
};
