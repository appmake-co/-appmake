import React from "react";
import {
  FormControl,
  Typography,
  TextField,
  InputAdornment,
} from "@mui/material";
import { useServerSideError } from "../../index";

const TextInput = ({
  label,
  name,
  value = "",
  variant = "outlined",
  autoComplete = "off",
  startIcon,
  endIcon,
  errors,
  size = "small",
  styles = {},
  ...props
}) => {
  const { error, clearError } = useServerSideError({
    errors,
    name,
  });

  const handleChange = (e) => {
    if (error) clearError();
    onChange(e);
  };

  return (
    <FormControl fullWidth sx={styles}>
      <Typography variant="overline" color="textSecondary">
        {label}
      </Typography>
      <TextField
        fullWidth
        autoComplete="off"
        name={name}
        value={value}
        error={error}
        size={size}
        onChange={handleChange}
        helperText={props.helperText || error}
        startAdornment={
          startIcon && (
            <InputAdornment position="start">{startIcon}</InputAdornment>
          )
        }
        endAdornment={
          endIcon && <InputAdornment position="end">{endIcon}</InputAdornment>
        }
        {...props}
      />
    </FormControl>
  );
};

export default TextInput;
