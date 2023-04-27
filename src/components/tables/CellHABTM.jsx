import React from "react";
import { Box, Button } from "@mui/material";
import { CompareArrows } from "@mui/icons-material";

const CellHasMany = ({ value, handleClick, ...props }) => {
  return (
    <Box sx={sx.cell}>
      <Button
        fullWidth
        size="small"
        color="primary"
        sx={sx.button}
        endIcon={<CompareArrows />}
        onClick={handleClick}
      >
        {value}
      </Button>
    </Box>
  );
};

export default CellHasMany;

const sx = {
  cell: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
  },
  avatar: {
    backgroundColor: "common.white",
  },
  button: {
    textTransform: "none",
    fontFamily: (theme) => theme.typography.body3.fontFamily,
    letterSpacing: 0,
  },
};
