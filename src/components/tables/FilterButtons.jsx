import React from "react";
import { Box, Button } from "@mui/material";
import { FilterInput } from "../../index";
import { FilterList } from "@mui/icons-material";
import { Plus, Search } from "react-feather";

const FilterButtons = ({
  handleSearch,
  handleAddFilter,
  handleClearFilters,
  ...props
}) => {
  return (
    <>
      <FilterInput>
        <Box sx={sx.input}>
          <Button
            variant="outlined"
            startIcon={<Plus />}
            onClick={handleAddFilter}
            sx={sx.addFilterButton}
          >
            Filter
          </Button>
        </Box>
      </FilterInput>
      <Button
        sx={sx.button}
        startIcon={<Search />}
        onClick={handleSearch}
        fullWidth
        variant="contained"
        color="primary"
      >
        Search
      </Button>
      <Button
        sx={sx.button}
        startIcon={<FilterList />}
        onClick={handleClearFilters}
        fullWidth
        variant="outlined"
        color="primary"
      >
        Reset filters
      </Button>
    </>
  );
};

export default FilterButtons;

const sx = {
  button: {
    mt: 2,
  },
  addFilterButton: {
    maxWidth: "160px",
    width: { sm: "100%" },
  },
  icon: {
    height: "20px",
    width: "20px",
    color: "icon",
  },
};
