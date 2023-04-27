import React from "react";
import { Box, Container } from "@mui/material";

const Section = ({
  children,
  container = false,
  maxWidth = "lg",
  styles = {},
  ...props
}) => {
  return (
    <Box sx={{ ...sx.root, ...styles }}>
      {container ? (
        <Container maxWidth={maxWidth}>{children}</Container>
      ) : (
        children
      )}
    </Box>
  );
};

export default Section;

const sx = {
  root: {
    my: 2,
    width: "100%",
  },
};
