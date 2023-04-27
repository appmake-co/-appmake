import React from "react";
import { Button } from "@mui/material";
import { ExpandMore, ExpandLess } from "@mui/icons-material";

const CellHeader = ({
  label,
  value,
  sortable = false,
  sortDirection,
  handleSortClick,
  ...params
}) => {
  return (
    <Button
      onClick={
        sortable && handleSortClick ? () => handleSortClick(value) : null
      }
      endIcon={
        <>
          {sortable && sortDirection == "asc" && <ExpandMore sx={sx.icon} />}
          {sortable && sortDirection == "desc" && <ExpandLess sx={sx.icon} />}
        </>
      }
    >
      {label}
    </Button>
  );
};

export default CellHeader;

const sx = {
  root: {},
  button: {
    py: 0,
    px: 1,
    display: "flex",
    alignItems: "center",
    borderRadius: "8px",
    cursor: "pointer",
    "&:hover $headerName": {
      color: "primary.main",
    },
    "&:hover $icon": {
      visibility: "visible",
    },
  },
  headerName: {
    textTransform: "none",
    fontWeight: 500,
    color: "text.primary",
  },
  icon: {
    visibility: "hidden",
    color: "primary.main",
    height: 20,
    width: 20,
  },
  settingsIcon: {
    color: "text.secondary",
    ml: 0.5,
  },
};
