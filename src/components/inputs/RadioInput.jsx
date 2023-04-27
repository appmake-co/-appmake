import React from "react";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";

const RadioInput = ({
  label,
  name,
  value,
  options,
  handleChange,
  ...props
}) => (
  <FormControl fullWidth component="fieldset">
    <Typography variant="body2" gutterBottom>
      {label}
    </Typography>
    <RadioGroup name={name} value={String(value)} onChange={handleChange}>
      {options &&
        options.map((option, idx) => (
          <FormControlLabel
            key={idx}
            value={String(option.value)}
            control={<Radio />}
            label={<Typography variant="body2">{option.label}</Typography>}
          />
        ))}
    </RadioGroup>
  </FormControl>
);

export default RadioInput;
