import React from "react";
import { Box, Avatar, Typography } from "@mui/material";

const Placeholder = ({ icon, title, subtitle, actions, ...props }) => {
  return (
    <Box
      p={2}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100%"
      width="100%"
    >
      {icon && <Avatar sx={sx.avatar}>{icon}</Avatar>}
      <Typography variant="subtitle1" mt={2}>
        {title}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        {subtitle}
      </Typography>
      <Box sx={sx.actions}>{actions}</Box>
    </Box>
  );
};
export default Placeholder;

const sx = {
  avatar: {
    height: "50px",
    width: "50px",
    backgroundColor: "common.highlight",
    mb: 2,
    color: "icon",
  },
  actions: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    mt: 1,
  },
};
