import React from "react";
import { Autosuggest, FilterInput } from "../../index";
import { Box } from "@mui/material";
import { SORT_DIRECTIONS } from "../../lib/constants";

const FilterSortInput = ({ query = {}, fields, handleChange, ...props }) => {
  return (
    <FilterInput label="Sort By">
      <Box sx={sx.sort}>
        <Box sx={sx.inputSortBy}>
          <Autosuggest
            name={"sort_by"}
            options={fields?.map((field) => ({
              label: field.name,
              value: field.name,
            }))}
            placeholder="Sort field"
            value={query?.sort_by || ""}
            onChange={handleChange}
          />
        </Box>
        <Box sx={sx.inputSortDirection}>
          <Autosuggest
            name={"sort_direction"}
            options={SORT_DIRECTIONS}
            placeholder="Sort direction"
            value={query?.sort_direction || ""}
            onChange={handleChange}
          />
        </Box>
      </Box>
    </FilterInput>
  );
};

export default FilterSortInput;

const sx = {
  sort: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
  inputSortBy: {
    width: "100%",
    flexScale: 1,
    mr: 1,
  },
  inputSortDirection: {
    width: "100%",
    flexScale: 1,
    mr: 0,
  },
};
