import { Box, Container } from "@mui/material";

const Section = ({
  children,
  maxWidth,
  bgColor="background.paper",
  styles = {},
  ...props
}) => {
  return (
    <Box sx={{ 
      ...sx.root, 
      backgroundColor: bgColor,
      ...styles }}>
      {maxWidth ? (
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
  }
};
