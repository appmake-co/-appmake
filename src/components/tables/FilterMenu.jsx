import React from "react";
import { Box, Button, Fade, Popover, Typography } from "@mui/material";
import { FilterForm } from "../../index";
import { FilterList } from "@mui/icons-material";
import { Search } from "react-feather";

const FilterMenu = ({
  open,
  anchorEl,
  fields,
  collection,
  activeFilters,
  setActiveFilters,
  handleSearch,
}) => {
  return (
    <Popover
      id={"filter-popover"}
      open={open}
      anchorEl={anchorEl}
      onClose={handleSearch}
      placement="bottom-start"
      sx={sx.popover}
      TransitionComponent={Fade}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
    >
      <Box sx={sx.root}>
        <Box sx={sx.header}>
          <Box>
            <FilterList color="primary" sx={sx.icon} />
          </Box>
          <Typography variant="caption" color="textSecondary" sx={sx.title}>
            Search filters
          </Typography>
        </Box>
        <Box sx={sx.content}>
          <FilterForm
            fields={fields}
            collection={collection}
            activeFilters={activeFilters}
            setActiveFilters={setActiveFilters}
            handleSearch={handleSearch}
          />
          <Button
            sx={sx.searchButton}
            startIcon={<Search />}
            onClick={handleSearch}
            fullWidth
            variant="contained"
            color="primary"
          >
            Search
          </Button>
        </Box>
      </Box>
    </Popover>
  );
};

export default FilterMenu;

const sx = {
  root: {
    width: "100%",
    maxWidth: 420,
    backgroundColor: "background.main",
    width: ["280px", "auto"],
  },
  content: {
    p: 2,
  },
  header: {
    display: "flex",
    flexDirecton: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    height: 46,
    py: 0,
    px: 2,
    borderBottom: "1px solid",
    borderColor: "common.inputBorder",
  },
  popover: {
    zIndex: (theme) => theme.zIndex.modal,
  },
  icon: {
    height: 20,
    width: 20,
    mr: 10,
  },
  searchButton: {
    mt: 1,
  },
};
