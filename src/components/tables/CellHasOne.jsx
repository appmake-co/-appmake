import React from "react";
import { Box, Button } from "@mui/material";
import { RepeatOne } from "@mui/icons-material";

const CellHasOne = ({ value, headerName, handleClick, ...props }) => {
  return (
    <Box sx={sx.cell}>
      <Button
        fullWidth
        size="small"
        color="primary"
        sx={sx.button}
        endIcon={<RepeatOne />}
        onClick={handleClick}
      >
        {value}
      </Button>
    </Box>
  );
};

export default CellHasOne;

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
