import React from "react";
import { Button } from "@mui/material";
import { PlayArrow } from "@mui/icons-material";

const CellVideo = ({ value, handleClick, ...props }) => {
  return (
    <Button
      onClick={handleClick}
      variant="outlined"
      startIcon={<PlayArrow />}
      sx={sx.button}
    >
      Video
    </Button>
  );
};

export default CellVideo;

const sx = {
  root: {},
};
