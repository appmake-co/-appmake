import React from "react";
import { Box, Button } from "@mui/material";
import { TurnSlightRight } from "@mui/icons-material";

const CellBelongsTo = ({ value, handleClick, ...props }) => {
  return (
    <Box sx={sx.cell}>
      <Button
        fullWidth
        size="small"
        color="primary"
        variant="outlined"
        sx={sx.button}
        endIcon={<TurnSlightRight />}
        onClick={handleClick}
      >
        {value}
      </Button>
    </Box>
  );
};

export default CellBelongsTo;

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
