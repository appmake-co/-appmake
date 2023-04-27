import React, { useState } from "react";
import { FormControl, TextField, Typography } from "@mui/material";
import moment from "moment";
import { useServerSideError } from "../../index";

const DateInput = ({
  required,
  label,
  name,
  value,
  handleChange,
  placeholder,
  onKeyPress,
  errors,
  helperText,
  ...props
}) => {
  const { error, clearError } = useServerSideError({
    errors,
    name,
  });

  const handleInputChange = (ev) => {
    clearError();
    handleChange(ev);
  };

  let selectedDate = moment(value).format("yyyy-MM-DD");

  return (
    <FormControl fullWidth>
      <Typography variant="body2" color="textSecondary">
        {label}
      </Typography>
      <TextField
        autoComplete="off"
        fullWidth
        type="date"
        name={name}
        placeholder={placeholder}
        margin="dense"
        onKeyPress={onKeyPress}
        variant="outlined"
        onChange={handleInputChange}
        value={selectedDate}
        error={error}
        helperText={helperText || error}
      />
    </FormControl>
  );
};

export default DateInput;
