import React from "react";
import { Badge } from "@mui/material";

const OnlineStatusBadge = ({ online = "true", children, ...props }) => {
  return (
    <Badge
      {...props}
      variant="dot"
      sx={sx.badge}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      color="success"
    >
      {children && children}
    </Badge>
  );
};

export default OnlineStatusBadge;

const sx = {
  badge: {
    color: "secondary",
  },
};
