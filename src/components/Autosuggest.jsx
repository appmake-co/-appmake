import React, { useEffect, useState } from "react";
import { Box, Typography, TextField, InputBase } from "@mui/material";
import { useServerSideError } from "../index";
import { ErrorText } from "../index";
import Autocomplete from "@mui/material/Autocomplete";

const Autosuggest = ({
  errors,
  value,
  options,
  label,
  name,
  placeholder = "Select",
  multiselect = false,
  onChange,
  handleInputChange,
  freeSolo = false,
  className,
  ...props
}) => {
  const [selected, setSelected] = useState({
    label: "",
    value: null,
  });

  const { error, clearError } = useServerSideError({ errors, name });

  const handleOnChange = (event, newValue) => {
    if (error) clearError();

    setSelected(newValue);
    onChange({
      target: {
        name: name,
        value: newValue?.value,
      },
    });
  };

  useEffect(() => {
    if (typeof value != "object") {
      setSelected(options.find((o) => o.value == value));
    } else {
      setSelected(value);
    }
  }, [value]);

  return (
    <Box sx={sx.container}>
      <Typography variant="caption" color="textSecondary" sx={sx.label}>
        {label}
      </Typography>
      <Autocomplete
        freeSolo={freeSolo}
        multiple={multiselect}
        disableCloseOnSelect={multiselect}
        sx={{
          paper: sx.paper,
          option: sx.option,
          popperDisablePortal: sx.popperDisablePortal,
        }}
        value={selected}
        onChange={(event, newValue) => {
          handleOnChange(event, newValue);
        }}
        onInputChange={(event, newInputValue) => {
          handleInputChange && handleInputChange(newInputValue);
        }}
        noOptionsText="No options"
        clearOnBlur
        handleHomeEndKeys
        options={options}
        getOptionLabel={(option) => option?.label}
        getOptionSelected={(option, value) => option?.label == value?.label}
        renderInput={(params) => (
          <TextField
            {...params}
            size="small"
            sx={sx.textField}
            placeholder={placeholder}
            ref={params.InputProps.ref}
          />
        )}
      />
      <ErrorText error={error} />
    </Box>
  );
};

export default Autosuggest;

const sx = {
  container: {
    width: "100%",
  },
  textField: {
    width: "100%",
  },
  inputError: {
    "& input": {
      border: "2px solid",
      borderColor: "error.main",
      p: 1,
      height: 20,
      borderRadius: (theme) => theme.shape.borderRadius,
    },
  },
  paper: {
    backgroundColor: "common.white",
    mt: 1,
    color: "#586069",
    fontSize: 15,
  },
  option: {
    zIndex: "999 !important",
    minHeight: "auto",
    alignItems: "flex-start",
    p: 8,
    '&[aria-selected="true"]': {
      backgroundColor: "transparent",
    },
    '&[data-focus="true"]': {
      backgroundColor: "action.hover",
    },
  },
  popperDisablePortal: {
    position: "relative",
  },
  label: {
    mb: 0,
  },
};
