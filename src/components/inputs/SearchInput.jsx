import React from 'react'
import { useState } from "react";
import { TextInput } from "../../index";

const SearchInput = ({
  label,
  placeholder = "Search...",
  handleSearch,
  ...props
}) => {
  const [keywords, setKeywords] = useState("");

  const handleChange = (ev) => {
    setKeywords(ev.target.value);
  };

  const handleKeyPress = (ev) => {
    if (ev.key === "Enter") {
      handleSearch(keywords);
    }
  };

  return (
    <TextInput
      label={label}
      value={keywords}
      placeholder="Search"
      onChange={handleChange}
      onKeyPress={handleKeyPress}
      {...props}
    />
  );
};

export default SearchInput;
