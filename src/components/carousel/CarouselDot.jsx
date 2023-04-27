import React from "react";
import { Box, Button } from "@mui/material";

const CarouselDot = ({ onClick, styles = {}, ...rest }) => {
  const {
    onMove,
    index,
    active,
    carouselState: { currentSlide, deviceType },
  } = rest;
  // onMove means if dragging or swiping in progress.
  // active is provided by this lib for checking if the item is active or not.
  return (
    <Button
      disableRipple
      sx={sx.button}
      className={active ? "active" : "inactive"}
      onClick={() => onClick()}
    >
      <Box
        sx={{
          ...sx.dot,
          ...(active && sx.dotActive),
          ...styles,
        }}
      />
    </Button>
  );
};

export default CarouselDot;

const sx = {
  button: {
    py: 1,
    px: 0,
    mx: "0px",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  dot: {
    width: "100%",
    height: "4px",
    backgroundColor: "background.main",
    transition: "all 0.3s ease-in-out",
  },
  dotActive: {
    backgroundColor: "background.dark",
  },
};
