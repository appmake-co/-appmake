import React from "react";
import {
  FormControl,
  Typography,
  TextField,
  InputAdornment,
  MenuItem,
} from "@mui/material";
import { useServerSideError } from "../../index";

const TextInput = ({
  label,
  type,
  variant = "outlined",
  name,
  margin,
  value,
  options,
  multiline,
  rows,
  handleChange,
  placeholder,
  disabled,
  onKeyPress,
  autoComplete = "off",
  startIcon,
  endIcon,
  loading,
  size = "normal",
  errors,
  helperText,
  styles = {},
  ...props
}) => {
  const { error, clearError } = useServerSideError({ errors, name });

  const handleInputChange = (e) => {
    if (error) clearError();
    handleChange(e);
  };

  return (
    <FormControl fullWidth sx={styles}>
      <Typography variant="caption" color="textSecondary">
        {label}
      </Typography>
      <TextField
        fullWidth
        select
        rows={rows}
        multiline={multiline}
        autoComplete="off"
        type={type}
        name={name}
        margin={margin}
        disabled={disabled}
        placeholder={placeholder}
        onKeyPress={onKeyPress}
        onChange={handleInputChange}
        variant={variant}
        value={value || ""}
        error={error}
        size={size}
        helperText={helperText || error}
        startAdornment={
          startIcon && (
            <InputAdornment position="start">{startIcon}</InputAdornment>
          )
        }
        endAdornment={
          endIcon && <InputAdornment position="end">{endIcon}</InputAdornment>
        }
        {...props}
      >
        {options?.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </FormControl>
  );
};

export default TextInput;
