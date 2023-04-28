import React from "react";
import { Box } from "@mui/material";

const FieldVideo = ({ value, height = 240, width = 240, ...props }) => {
  return (
    <Box sx={sx.root}>
      <video src={value} controls muted autoPlay sx={sx.video} />
    </Box>
  );
};

export default FieldVideo;

const sx = {
  root: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#111111",
  },
  video: {
    width: "100%",
    height: "auto",
    maxHeight: "calc(100vh - 150px)",
  },
};
