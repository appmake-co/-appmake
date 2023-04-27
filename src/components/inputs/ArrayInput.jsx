import React from "react";
import { useServerSideError } from "../../index";
import {
  FormControl,
  Popper,
  Typography,
  Autocomplete,
  Chip,
  TextField,
} from "@mui/material";
import { X } from "react-feather";

const CustomPopper = function (props) {
  return <Popper {...props} sx={sx.popper} placement="bottom" />;
};

const ArrayInput = ({
  errors,
  label,
  name,
  value,
  placeholder,
  handleChange,
  helperText,
  textFieldProps = {},
  ...props
}) => {
  const { error, clearError } = useServerSideError({ errors, name });

  const handleInputChange = (ev, values) => {
    if (error) clearError();

    let newValues = values.filter((value) => value != null);
    handleChange({
      target: {
        name,
        value: newValues,
      },
    });
  };

  return (
    <FormControl fullWidth>
      <Typography variant="overline" color="textSecondary" sx={sx.label}>
        {label}
      </Typography>
      <Autocomplete
        multiple
        freeSolo
        hasClearIcon={false}
        defaultValue={(Array.isArray(value) && value) || undefined}
        onChange={handleInputChange}
        options={["Enter value"]}
        getOptionLabel={(option) => option}
        PopperComponent={CustomPopper}
        clearIcon={<X size={20} />}
        renderTags={(tagValue, getTagProps) =>
          Array.isArray(tagValue) &&
          tagValue.map((option, index) => (
            <Chip
              key={index}
              label={option}
              color="primary"
              variant="outlined"
              deleteIcon={<X size={20} />}
              {...getTagProps({ index })}
            />
          ))
        }
        renderInput={(params) => (
          <TextField
            {...params}
            color="primary"
            placeholder={placeholder}
            margin="dense"
            error={error}
            helperText={helperText || error}
            {...textFieldProps}
          />
        )}
        {...props}
      />
    </FormControl>
  );
};

export default ArrayInput;

export const sx = {
  root: {},
  label: {
    mb: 0,
    pb: 0,
  },
  popper: {
    fontWeight: (theme) => theme.typography.body3.fontWeight,
    fontFamily: (theme) => theme.typography.body3.fontFamily,
  },
};
