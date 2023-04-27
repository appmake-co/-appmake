import React, { useState } from "react";
import { TextInput } from "../../index";

const JSONInput = ({
  value,
  name,
  label,
  placeholder,
  handleChange,
  ...props
}) => {
  const defaultValue = value ? JSON.stringify(value, null, 2) : "{}";
  const [jsonValue, setJsonValue] = useState(defaultValue);
  const [jsonError, setJsonError] = useState(false);

  const isValidJSON = (str) => {
    try {
      if (
        JSON.parse(str) &&
        (str === "{}" || Object.keys(JSON.parse(str)).length > 0)
      ) {
        setJsonError(false);
        return true;
      } else {
        setJsonError(true);
        return false;
      }
    } catch (e) {
      setJsonError(true);
      return false;
    }
  };

  const handleJSONChange = (ev) => {
    const { value } = ev.target;
    if (isValidJSON(value)) {
      handleChange({
        target: {
          name,
          value: JSON.parse(value),
        },
      });
    }
    setJsonValue(value);
  };

  const prettyJson = (json) => {
    if (json.constructor == Object) {
      return JSON.stringify(json, null, 2);
    } else {
      return json;
    }
  };

  return (
    <TextInput
      multiline
      rows={4}
      error={jsonError}
      value={prettyJson(jsonValue)}
      placeholder={placeholder}
      handleChange={handleJSONChange}
      name={name}
      label={label}
    />
  );
};

export default JSONInput;

const sx = {
  root: {},
};
