import React, { useState, useEffect } from "react";
import { Box, LinearProgress, IconButton } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

const CarouselProgress = ({ children, ...props }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNextStep = () => {
    let nextStep = currentStep + 1;
    if (nextStep > children.length - 1) {
      nextStep = 0;
    }
    setCurrentStep(nextStep);
  };

  const handlePrevStep = () => {
    let nextStep = currentStep - 1;
    if (nextStep == 0) {
      nextStep = children.length - 1;
    }
    setCurrentStep(nextStep);
  };

  return (
    <Box sx={sx.root}>
      <Box sx={sx.content}>{children[currentStep]}</Box>
      <Box sx={sx.controls}>
        <LinearProgress color="primary" variant="determinate" value={80} />
        <Box sx={sx.actions}>
          <IconButton
            variant="contained"
            onClick={handlePrevStep}
            sx={sx.actionButton}
          >
            <ChevronLeft />
          </IconButton>
          <IconButton
            variant="contained"
            onClick={handleNextStep}
            sx={sx.actionButton}
          >
            <ChevronRight />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default CarouselProgress;

const sx = {
  actions: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
  },
  controls: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
};
