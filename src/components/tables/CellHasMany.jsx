import React from "react";
import { Box, Button } from "@mui/material";
import { ForkRight } from "@mui/icons-material";

const CellHasMany = ({ value, headerName, handleClick, ...props }) => {
  return (
    <Box sx={sx.cell}>
      <Button
        fullWidth
        size="small"
        color="primary"
        sx={sx.button}
        endIcon={<ForkRight />}
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
    letterSpacing: 0,
  },
};
