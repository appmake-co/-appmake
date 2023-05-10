import React, { useState, useEffect } from "react";
import { SearchInput, FilterButton } from "../../index";
import { Box } from "@mui/material";

const DataTableToolbar = ({
  loading,
  query = {},
  handleSearch,
  searchable = true,
  filterable = true,
  actions,
  selected,
  handleFilter,
  handleClearFilters,
  ...props
}) => {
  const [queryParams, setQueryParams] = useState(query);
  const [badgeCount, setBadgeCount] = useState(0);

  useEffect(() => {
    if (query?.filters) {
      setBadgeCount(query.filters.length);
    }
  }, [query?.filters]);

  return (
    <Box sx={sx.root}>
      <SearchInput
        placeholder="Search..."
        name="keywords"
        handleSearch={handleSearch}
      />
      {filterable && (
        <FilterButton
          loading={loading}
          query={query}
          badgeCount={badgeCount}
          handleFilter={handleFilter}
          handleClearFilters={handleClearFilters}
        />
      )}
    </Box>
  );
};

export default DataTableToolbar;

const sx = {
  root: {
    p: 2,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: "10px",
  },
};
