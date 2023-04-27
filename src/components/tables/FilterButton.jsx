import React from "react";
import { ButtonGroup, Badge, Button, CircularProgress } from "@mui/material";
import { Clear, FilterList } from "@mui/icons-material";

const FilterButton = ({
  loading,
  query,
  badgeCount = 0,
  handleFilter,
  handleClearFilters,
}) => {
  const { keywords, filters } = query;

  return (
    <Badge
      sx={sx.badge}
      badgeContent={badgeCount}
      color="primary"
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      <ButtonGroup>
        <Button
          variant="outlined"
          sx={sx.button}
          startIcon={
            loading ? (
              <CircularProgress disableShrink color="primary" size={20} />
            ) : (
              <FilterList sx={sx.icon} />
            )
          }
          onClick={handleFilter}
        >
          Filters
        </Button>
        {(keywords || filters?.length > 0) && (
          <Button
            variant="outlined"
            sx={sx.secondaryButton}
            onClick={handleClearFilters}
          >
            <Clear sx={sx.icon} />
          </Button>
        )}
      </ButtonGroup>
    </Badge>
  );
};

export default FilterButton;

const sx = {
  button: {
    ml: 1,
    color: "text.secondary",
  },
  secondaryButton: {
    height: 34,
    width: 34,
    color: "text.secondary",
  },
  icon: {
    height: 20,
    width: 20,
    color: "text.secondary",
  },
};
