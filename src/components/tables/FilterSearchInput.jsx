import React from "react";
import { FilterInput, SearchInput } from "../../index";

const FilterSearchInput = ({ handleSearch, ...props }) => {
  return (
    <FilterInput label="Keywords">
      <SearchInput size="small" handleSearch={handleSearch} />
    </FilterInput>
  );
};

export default FilterSearchInput;
