import React, { useState, useEffect } from "react";
import {
  FilterTypeInput,
  FilterSearchInput,
  FilterSortInput,
  FilterButtons,
} from "../../index";
import { Box } from "@mui/material";

const FilterForm = ({
  query = {},
  fields,
  handleChange,
  handleSearch,
  handleClearFilters,
  ...props
}) => {
  const [activeFilters, setActiveFilters] = useState([]);

  let defaultFilter = {
    field: "",
    operator: "",
    value: "",
  };

  const handleFilterChange = (ev, index) => {
    let filter = activeFilters[index];
    let { name, value } = ev.target;
    let updatedFilter = {
      ...filter,
      [name]: value,
    };

    if (name === "field") {
      updatedFilter = {
        ...updatedFilter,
        operator: "",
        value: "",
      };
    }

    let updatedFilters = [...activeFilters];
    updatedFilters[index] = updatedFilter;
    setActiveFilters(updatedFilters);
  };

  const handleAddFilter = () => {
    let updatedFilters = [...activeFilters, defaultFilter];
    setActiveFilters(updatedFilters);
  };

  const handleRemoveFilter = (index) => {
    let updatedFilters = activeFilters.filter((f, i) => i != index);
    setActiveFilters(updatedFilters);
  };

  const handleFilterSearch = () => {
    let searchQuery = {
      ...query,
      filters: activeFilters,
    };
    handleSearch(searchQuery);
  };

  useEffect(() => {
    if (query?.filters && Array.isArray(query?.filters)) {
      setActiveFilters(query?.filters);
    }
  }, [query]);

  return (
    <Box sx={sx.root}>
      <FilterSearchInput
        value={query.keywords}
        handleChange={handleChange}
        handleSearch={handleSearch}
      />
      <FilterSortInput
        query={query}
        fields={fields}
        handleChange={handleChange}
      />
      {Array.isArray(activeFilters) &&
        activeFilters?.map((filter, index) => (
          <FilterTypeInput
            key={index}
            index={index}
            filter={filter}
            fields={fields}
            handleFilterChange={handleFilterChange}
            handleRemoveFilter={handleRemoveFilter}
          />
        ))}
      <FilterButtons
        handleSearch={handleFilterSearch}
        handleAddFilter={handleAddFilter}
        handleClearFilters={handleClearFilters}
      />
    </Box>
  );
};

export default FilterForm;

const sx = {
  root: {
    width: "100%",
  },
};
