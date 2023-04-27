import React from "react";
import {
  alpha,
  Box,
  Switch,
  Typography,
  FormControlLabel,
} from "@mui/material";

const SwitchInput = ({ name, value, label, placeholder, handleChange }) => {
  return (
    <Box>
      <Box>
        <Typography variant="caption" color="textSecondary">
          {label}
        </Typography>
      </Box>
      <Box sx={sx.input}>
        <FormControlLabel
          control={
            <Switch
              name={name}
              checked={value}
              onChange={handleChange}
              value="true"
            />
          }
          label={
            <Typography variant="body1" color="textSecondary">
              {placeholder}
            </Typography>
          }
        />
      </Box>
    </Box>
  );
};

export default SwitchInput;

const sx = {
  input: {
    display: "flex",
    direction: "column",
    borderRadius: 4,
    pt: 0.5,
    pr: 2,
    pb: 0.5,
    pl: 2,
    backgroundColor: "common.white",
    border: (theme) => `1px solid ${theme.palette.common.inputBorder}`,
    boxShadow: `rgb(0 0 0 / 5%) 0px 2px 4px !important`,
    fontSize: 15,
    "&:focus": {
      boxShadow: `${alpha("#999999", 0.25)} 0 0 0 0.2rem`,
      borderColor: "primary.light",
    },
  },
};
